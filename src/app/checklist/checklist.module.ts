import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChecklistComponent } from './checklist.component';
import { ListComponent } from './components/list/list.component';
import { ViewComponent } from './components/view/view.component';
import { ButtonComponent } from '@/app/components/button/button.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ViewItemComponent } from './components/view-item/view-item.component';
import { CheckboxComponent } from '@/app/components/checkbox/checkbox.component';
import { CreatorComponent } from './components/creator/creator.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [ChecklistComponent],
    bootstrap: [ChecklistComponent],
    declarations: [
        ListComponent,
        ViewComponent,
        ButtonComponent,
        CreatorComponent,
        ListItemComponent,
        ViewItemComponent,
        ChecklistComponent,
        CheckboxComponent
    ]
})
export class ChecklistModule {}
