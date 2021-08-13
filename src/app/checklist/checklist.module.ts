import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecklistComponent } from './checklist.component';

@NgModule({
    imports: [CommonModule],
    exports: [ChecklistComponent],
    bootstrap: [ChecklistComponent],
    declarations: [ChecklistComponent]
})
export class ChecklistModule {
}
