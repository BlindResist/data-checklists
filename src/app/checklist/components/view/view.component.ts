import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IChecklistData, IChecklistView, IViewItemStatus } from '@/app/checklist/models/checklist.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
    @Input() data!: IChecklistData[]

    @Output() onDone: EventEmitter<IViewItemStatus> = new EventEmitter()
    @Output() onCreate: EventEmitter<string> = new EventEmitter()

    public get empty(): boolean {
        return this.selectedItem.length < 1
    }

    public get selectedItem(): IChecklistView[] {
        return this.filteredData.length ? this.filteredData[0].items : []
    }

    public get filteredData(): IChecklistData[] | [] {
        return this.data.filter((item: IChecklistData) => item.selected)
    }

    doneItem(obj: IViewItemStatus): void {
        this.onDone.emit(obj)
    }

    createNewItem(name: string): void {
        this.onCreate.emit(name)
    }
}
