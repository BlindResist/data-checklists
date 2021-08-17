import { Injectable } from '@angular/core';
import { IChecklistData } from '@/app/checklist/models/checklist.model';

@Injectable({
    providedIn: 'root'
})
export class ChecklistService {

    private data: IChecklistData[] = [
        {
            id: 0,
            selected: true,
            name: 'First item',
            items: [
                {
                    id: 0,
                    selected: false,
                    name: 'First item - case 1',
                    details: 'First item details'
                },
                {
                    id: 1,
                    selected: false,
                    name: 'First item - case 2',
                    details: 'Second check item details'
                }
            ]
        },
        {
            id: 1,
            selected: false,
            name: 'Second item',
            items: [
                {
                    id: 0,
                    selected: false,
                    name: 'Second item - case 1',
                    details: 'First check item details'
                },
                {
                    id: 1,
                    selected: false,
                    name: 'Second item - case 1',
                    details: 'Second check item details'
                }
            ]
        }
    ]

    getData(): IChecklistData[] {
        return this.data
    }

    addData(item: IChecklistData): void {
        this.data.push(item)
    }

    changeData(id: number): void {
        this.data.forEach((item: IChecklistData) => {
            item.selected = item.id === id
        })
    }
}
