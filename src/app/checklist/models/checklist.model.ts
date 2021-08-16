export interface ChecklistView {
    id: number,
    name: string,
    details: string
}

export interface ChecklistData {
    id: number,
    name: string,
    items: ChecklistView[]
}
