import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IChecklistData } from '@/app/checklist/models/checklist.model';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent {
    @Input() data: IChecklistData[] = []

    @Output() onOpen: EventEmitter<number> = new EventEmitter()
    @Output() onCreate: EventEmitter<string> = new EventEmitter()

    openItem(id: number): void {
        this.onOpen.emit(id)
    }

    createNewItem(name: string): void {
        this.onCreate.emit(name)
    }
}
