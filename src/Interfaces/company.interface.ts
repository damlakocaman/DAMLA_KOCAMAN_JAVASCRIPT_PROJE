export interface ICompany {
    id:number
    name:string
    country: string
    services:ServiceType[]
    rating:number
    isVerified:boolean
}
export interface ServiceType{
    id:number
    name:'Air'|'Sea'|'Road'|'Rail'
}
export interface ICompanyListResponse {
    data:ICompany[];
    totalCount:number;
    
}
export interface ICompany {
    id:number;
    name:string;
    isAdded:boolean;
}