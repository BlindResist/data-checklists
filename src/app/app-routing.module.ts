import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChecklistComponent } from '@/app/checklist/checklist.component';

const routes: Routes = [
    {
        path: '',
        component: ChecklistComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
