export interface IChecklistView {
    id: number,
    name: string,
    details: string,
    selected: boolean
}

export interface IChecklistData {
    id: number,
    name: string,
    selected: boolean,
    items: IChecklistView[]
}
