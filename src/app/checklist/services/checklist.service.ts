import { Injectable } from '@angular/core';
import { ChecklistData } from '@/app/checklist/models/checklist.model';

@Injectable({
    providedIn: 'root'
})
export class ChecklistService {

    private data: ChecklistData[] = [
        {
            id: 0,
            name: 'First list item',
            items: [
                {
                    id: 0,
                    name: 'First check item',
                    details: 'First check item details'
                },
                {
                    id: 1,
                    name: 'Second check item',
                    details: 'Second check item details'
                }
            ]
        }
    ]

    getData(): ChecklistData[] {
        return this.data
    }

    addData(item: ChecklistData): void {
        this.data.push(item)
    }
}
