import { Component } from '@angular/core';

@Component({
    selector: 'view',
    template: `
        <section class="page">
            <h1>Check lists!</h1>
            <app-checklist></app-checklist>
        </section>
    `
})
export class ViewComponent {
}
