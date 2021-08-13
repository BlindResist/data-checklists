import { Component } from '@angular/core';

@Component({
    selector: 'checklists',
    template: `
        <section class="page">
            <h1>Check lists!</h1>
            <app-checklist></app-checklist>
        </section>
    `
})
export class ChecklistsComponent {
}
