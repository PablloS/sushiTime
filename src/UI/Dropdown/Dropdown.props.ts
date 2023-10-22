import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface DropdownProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title?: string, 
    defaultValue: string,
    items: {id: number, name: string}[], 
    onValueChange: (id: number, name: string) => void
}