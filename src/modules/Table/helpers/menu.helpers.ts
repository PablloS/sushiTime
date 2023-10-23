import { IMenuItem } from "../interfaces/menu.interface";


export const convertMenuItemToCorrectForm = (item: IMenuItem): string[] => {
    let outputArray: string[] = []; 
    outputArray.push(item.name);
    outputArray.push(item.filial.name); 
    outputArray.push(item.tt.name); 
    item.active ? outputArray.push("Активно") : outputArray.push("Не активно");
    outputArray.push(item.export.join(',\n'));
    return outputArray; 
}