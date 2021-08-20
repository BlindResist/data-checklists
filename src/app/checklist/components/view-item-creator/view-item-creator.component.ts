import { Component, EventEmitter, Output } from '@angular/core';
import { ICreator } from '@/app/checklist/models/checklist.model';

@Component({
    selector: 'app-view-item-creator',
    templateUrl: './view-item-creator.component.html',
    styleUrls: ['./view-item-creator.component.scss']
})
export class ViewItemCreatorComponent implements ICreator {
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
