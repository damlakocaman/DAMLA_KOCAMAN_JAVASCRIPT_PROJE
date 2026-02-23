import axios from "axios";
import { ICompanyListResponse } from "../Interfaces/company.interface";

export const getCompanies =async (): Promise<ICompanyListResponse> => {
    const res = await axios.get<ICompanyListResponse>("/api/companies");
    return res.data;
}