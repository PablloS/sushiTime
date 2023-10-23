export interface IMenuItem {
    id: number
    name: string
    filial: IFilial
    tt: ITt
    active: boolean
    export: string[]
}

export interface IFilial {
    id: number
    name: string
}

export interface ITt {
    id: number
    name: string
}

export interface IMenuResponse {
    max_pages: number, 
    data: IMenuItem[]
}

export interface IMenuRequestParams {
    filial_id: number, 
    limit?: number, 
    page?: number, 
    name?: string,
    filial?: string,
    tt?: string,
    active?: 'active' | 'no_active' | ''
}

