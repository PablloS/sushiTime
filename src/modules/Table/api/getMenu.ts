import { IMenuResponse } from './../interfaces/menu.interface';
import $api from "../../../api/axios.config";
import { IMenuRequestParams } from "../interfaces/menu.interface";


export const getMenu = async (options: IMenuRequestParams): Promise<IMenuResponse> => {
    const urlParams = new URLSearchParams();
    const entries = Object.entries(options);
    for (const [key, value] of entries) {
        if (key !== "filial_id") {
            urlParams.append(key, value);
        }
    }
 
    const menu: IMenuResponse =
        (await $api.get<IMenuResponse>(`/filial/${options.filial_id}/menu/?${urlParams}`)).data;
    return menu;
}