import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IViewItemStatus } from "@/app/checklist/models/checklist.model";

@Component({
    selector: 'app-view-item',
    templateUrl: './view-item.component.html',
    styleUrls: ['./view-item.component.scss']
})
export class ViewItemComponent {
    @Input() id: number = 0
    @Input() name: string = ''
    @Input() details!: string
    @Input() done: boolean = false

    @Output() onDone: EventEmitter<IViewItemStatus> = new EventEmitter()

    public bodyVisible: boolean = false

    get checkboxID(): string {
        return `view-item-check-${this.id}`
    }

    toggleBody(): void {
        this.bodyVisible = !this.bodyVisible
    }

    checkedHandler(checked: boolean): void {
        this.onDone.emit({
            checked,
            id: this.id
        })
    }
}
