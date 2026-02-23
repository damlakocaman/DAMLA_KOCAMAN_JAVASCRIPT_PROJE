import React, { useCallback, useEffect, useState } from 'react';
import { api } from '../context/file';
import { ICompanyListResponse, ICompany } from '../Interfaces/company.interface';
import { getCompanies } from '../API/company.service.ts';
export const CompanyListPages: React.FC = () => {

    const getCompany = useCallback(async () => {
        const response = await api.get("/companies");
        return response.data as ICompanyListResponse;
    }, []);
const createCompany = useCallback(async (payload: any): Promise<ICompany> => {
        const response = await api.post<ICompany>("/company/addCompany", payload);
        return response.data;
    }, []);


    const updateCompany = useCallback(async (id: number, payload: any) => {
        const response = await api.put(
            `/company/updateCompany/${id}`,
            payload
        );
        return response.data;
    }, []);
    const deleteCompany = useCallback(async (id: number) => {
    const response = await api.delete(
        `/company/deleteCompany/${id}`
    );
    return response.data;
}, []);
const [companies, setCompanies] = useState<ICompany[]>([]);


    useEffect(() => {

        (async () => {
            const companyData = (await getCompanies()).data;
            setCompanies(companyData);
        })();

    }, []);

    return (
        <div>
            <h1>"Firmalarim"</h1>
            <p>"Güncel listeye buradan ulaşabilirsiniz."</p>
           
            
              {companies.map((Company:ICompany) => (
             <div key ={Company.id}>
               <h3>{Company.name}</h3>
                <p>
                "Durum:" {Company.isAdded ? "Firma Eklendi" : "Firma Eklenmedi"}
            </p>
        </div>
    ))},

        </div>
    );
}   