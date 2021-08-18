import { Component, EventEmitter, Output } from '@angular/core';
import { IChecklistData } from "@/app/checklist/models/checklist.model";

@Component({
    selector: 'app-creator',
    templateUrl: './creator.component.html',
    styleUrls: ['./creator.component.scss']
})
export class CreatorComponent {
    @Output() create: EventEmitter<IChecklistData> = new EventEmitter()

    addNewListItem(): void {
        this.create.emit()
    }
}
