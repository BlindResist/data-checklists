import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChecklistComponent } from './checklist.component';
import { ListComponent } from './components/list/list.component';
import { ViewComponent } from './components/view/view.component';
import { InputComponent } from '@/app/components/input/input.component';
import { ListItemCreatorComponent } from './components/list-item-creator/list-item-creator.component';
import { ButtonComponent } from '@/app/components/button/button.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ViewItemComponent } from './components/view-item/view-item.component';
import { CheckboxComponent } from '@/app/components/checkbox/checkbox.component';
import { ViewItemCreatorComponent } from './components/view-item-creator/view-item-creator.component';
import { EmptyComponent } from './components/empty/empty.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    exports: [ChecklistComponent],
    bootstrap: [ChecklistComponent],
    declarations: [
        ListComponent,
        ViewComponent,
        InputComponent,
        ButtonComponent,
        ListItemComponent,
        ViewItemComponent,
        CheckboxComponent,
        ChecklistComponent,
        ListItemCreatorComponent,
        ViewItemCreatorComponent,
        EmptyComponent
    ]
})
export class ChecklistModule {}
