import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecklistComponent } from './checklist.component';
import { ListComponent } from './components/list/list.component';
import { ViewComponent } from './components/view/view.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ViewItemComponent } from './components/view-item/view-item.component';
import { ButtonComponent } from "@/app/components/button/button.component";

@NgModule({
    imports: [CommonModule],
    exports: [ChecklistComponent],
    bootstrap: [ChecklistComponent],
    declarations: [
        ChecklistComponent,
        ListComponent,
        ViewComponent,
        ListItemComponent,
        ViewItemComponent,
        ButtonComponent
    ]
})
export class ChecklistModule {}
