import { Component, Input } from '@angular/core';
import { IChecklistData, IChecklistView } from '@/app/checklist/models/checklist.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
    @Input() data!: IChecklistData[]

    get selectedItem(): IChecklistView[] {
        return this.data.filter(item => item.selected)[0].items
    }
}
