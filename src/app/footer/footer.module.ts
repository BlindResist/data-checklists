import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from "@/app/header/header.component";

@NgModule({
    imports: [CommonModule],
    exports: [FooterComponent],
    bootstrap: [HeaderComponent],
    declarations: [FooterComponent]
})
export class FooterModule {}
