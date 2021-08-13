import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderModule } from '@/app/header/header.module';
import { FooterModule } from '@/app/footer/footer.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { ViewComponent } from '@/app/pages/view.component';
import { ChecklistModule } from '@/app/checklist/checklist.module';

@NgModule({
    imports: [
        FooterModule,
        HeaderModule,
        BrowserModule,
        ChecklistModule,
        AppRoutingModule
    ],
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        ViewComponent,
        ButtonComponent
    ]
})
export class AppModule {
}
