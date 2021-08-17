import { Component, OnInit } from '@angular/core';
import { ChecklistService } from '@/app/checklist/services/checklist.service';
import { IChecklistData, IChecklistView } from '@/app/checklist/models/checklist.model';

@Component({
    selector: 'app-checklist',
    templateUrl: './checklist.component.html',
    styleUrls: ['./checklist.component.scss'],
    providers: [ChecklistService]
})
export class ChecklistComponent implements OnInit {

    public data = [] as IChecklistData[]

    constructor(
        private checklistService: ChecklistService
    ) {}

    ngOnInit(): void {
        this.data = this.checklistService.getData()
    }

    openView(item: IChecklistData): void {
        this.checklistService.changeData(item.id)
    }
}
