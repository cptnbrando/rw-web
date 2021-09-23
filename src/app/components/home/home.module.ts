import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavbarModule } from '../navbar/navbar.module';
import { FrontComponent } from './front/front.component';



@NgModule({
  declarations: [
    HomeComponent,
    FrontComponent
  ],
  imports: [
    CommonModule,
    NavbarModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
