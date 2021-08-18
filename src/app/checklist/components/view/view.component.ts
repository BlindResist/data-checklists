import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IChecklistData, IChecklistView, IViewItemStatus } from '@/app/checklist/models/checklist.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
    @Input() data!: IChecklistData[]

    @Output() done: EventEmitter<IViewItemStatus> = new EventEmitter()

    get selectedItem(): IChecklistView[] {
        return this.filteredData.length ? this.filteredData[0].items : []
    }

    get filteredData(): IChecklistData[] | [] {
        return this.data.filter((item: IChecklistData) => item.selected)
    }

    doneItem(obj: IViewItemStatus): void {
        this.done.emit(obj)
    }
}
