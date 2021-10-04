import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteComponent } from './quote/quote.component';
import { FrontComponent } from './front.component';
import { NavbarModule } from '../../navbar/navbar.module';
import { TeximateModule } from 'ngx-teximate';



@NgModule({
  declarations: [
      FrontComponent,
      QuoteComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    TeximateModule
  ],
  exports: [
      FrontComponent
  ]
})
export class FrontModule { }
