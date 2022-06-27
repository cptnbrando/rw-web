import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteComponent } from './quote/quote.component';
import { FrontComponent } from './front.component';
import { NavbarModule } from '../../navbar/navbar.module';
import { PaintingComponent } from './painting/painting.component';



@NgModule({
  declarations: [
      FrontComponent,
      QuoteComponent,
      PaintingComponent
  ],
  imports: [
    CommonModule,
    NavbarModule
  ],
  exports: [
      FrontComponent
  ]
})
export class FrontModule { }
