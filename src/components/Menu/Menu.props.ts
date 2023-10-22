import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface MenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    items: string[], 
    onValueChange: (value: string) => void
}