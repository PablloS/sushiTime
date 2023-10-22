import $api from "../../../api/axios.config"
import { IFilial } from "../interfaces/filial.interface";


export const getFilials = async (): Promise<IFilial[]> => {
    const filials: IFilial[] = (await $api.get<IFilial[]>('/filial/')).data; 
    return filials; 
}