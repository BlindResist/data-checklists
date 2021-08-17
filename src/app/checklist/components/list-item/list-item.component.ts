import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IChecklistData } from "@/app/checklist/models/checklist.model";

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
    @Input() public index!: number
    @Input() public data!: IChecklistData

    @Output() onClick = new EventEmitter()

    clickHandler(): void {
        this.onClick.emit(this.data)
    }
}
