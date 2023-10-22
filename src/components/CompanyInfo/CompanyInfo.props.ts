import { DetailedHTMLProps, HTMLAttributes } from "react";


export interface CompanyInfoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    companyName: string, 
}