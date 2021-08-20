import { Injectable } from '@angular/core';
import { IChecklistData, IChecklistView, IViewItemStatus } from '@/app/checklist/models/checklist.model';

@Injectable({
    providedIn: 'root'
})
export class ChecklistService {

    private data: IChecklistData[] = [
        {
            id: 0,
            selected: true,
            archive: false,
            name: 'First item',
            items: [
                {
                    id: 3234,
                    done: false,
                    selected: false,
                    name: 'First item - case 1',
                    details: 'First item details'
                },
                {
                    id: 1324523,
                    done: false,
                    selected: false,
                    name: 'First item - case 2',
                    details: 'Second check item details'
                }
            ]
        },
        {
            id: 1,
            archive: false,
            selected: false,
            name: 'Second item',
            items: [
                {
                    id: 4568,
                    done: false,
                    selected: false,
                    name: 'Second item - case 1',
                    details: 'First check item details'
                },
                {
                    id: 3547,
                    done: false,
                    selected: false,
                    name: 'Second item - case 1',
                    details: 'Second check item details'
                }
            ]
        }
    ]

    private activeListItem: number = 0

    getData(): IChecklistData[] {
        return this.data
    }

    addNewListItem(name: string): void {
        const newItem: IChecklistData = this.buildNewListItem(name)

        this.data.push(newItem)
        this.changeActiveListItem(newItem.id)
    }

    buildNewListItem(name: string): IChecklistData {
        const id: number = Math.floor(Date.now() / 1000)

        return {
            id,
            name,
            items: [],
            archive: false,
            selected: false
        }
    }

    changeActiveListItem(id: number): void {
        this.activeListItem = id
        this.data.forEach((item: IChecklistData) => {
            item.selected = item.id === id
        })
    }

    changeViewItemStatus(obj: IViewItemStatus): void {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id === this.activeListItem) {
                for (let j = 0; j < this.data[i].items.length; j++) {
                    if (this.data[i].items[j].id === obj.id) {
                        this.data[i].items[j].done = obj.checked
                    }
                }
            }
        }
    }

    addNewViewItem(id: number, obj: IChecklistView): void {}
}
