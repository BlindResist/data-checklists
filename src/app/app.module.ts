import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderModule } from '@/app/header/header.module';
import { FooterModule } from '@/app/footer/footer.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        FooterModule,
        HeaderModule,
        BrowserModule,
        AppRoutingModule
    ],
    bootstrap: [AppComponent],
    declarations: [AppComponent]
})
export class AppModule {
}
