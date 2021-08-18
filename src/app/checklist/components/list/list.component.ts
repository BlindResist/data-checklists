import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IChecklistData } from '@/app/checklist/models/checklist.model';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent {
    @Input() data: IChecklistData[] = []

    @Output() open: EventEmitter<number> = new EventEmitter()

    openItem(id: number): void {
        this.open.emit(id)
    }
}
