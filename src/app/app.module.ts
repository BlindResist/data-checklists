import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderModule } from '@/app/header/header.module';
import { FooterModule } from '@/app/footer/footer.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChecklistModule } from '@/app/checklist/checklist.module';

@NgModule({
    imports: [
        RouterModule,
        FooterModule,
        HeaderModule,
        BrowserModule,
        ChecklistModule,
        AppRoutingModule
    ],
    bootstrap: [AppComponent],
    declarations: [AppComponent]
})
export class AppModule {}
