import { Component, OnInit } from '@angular/core';
import { ChecklistService } from '@/app/checklist/services/checklist.service';
import { IChecklistData, IViewItemStatus } from '@/app/checklist/models/checklist.model';

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

    openListItemView(id: number): void {
        this.checklistService.changeActiveListItem(id)
    }

    changeViewItemStatus(obj: IViewItemStatus): void {
        this.checklistService.changeViewItemStatus(obj)
    }
}
