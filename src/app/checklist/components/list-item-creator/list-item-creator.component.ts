import { Component, EventEmitter, Output } from '@angular/core';
import { ICreator } from '@/app/checklist/models/checklist.model';

@Component({
    selector: 'app-list-item-creator',
    templateUrl: './list-item-creator.component.html',
    styleUrls: ['./list-item-creator.component.scss']
})
export class ListItemCreatorComponent implements ICreator {
    @Output() onCreate: EventEmitter<string> = new EventEmitter()

    public value: string = ''
    public inited: boolean = false

    addNewItem(): void {
        this.onCreate.emit(this.value)
        this.cancelNewItem()
    }

    initNewItem(): void {
        this.inited = true
    }

    cancelNewItem(): void {
        this.value = ''
        this.inited = false
    }
}
