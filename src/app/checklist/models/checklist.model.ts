export interface IChecklistView {
    id: number,
    name: string,
    done: boolean,
    details: string,
    selected: boolean
}

export interface IChecklistData {
    id: number,
    name: string,
    archive: boolean,
    selected: boolean,
    items: IChecklistView[]
}

export interface IViewItemStatus {
    id: number,
    checked: boolean
}
