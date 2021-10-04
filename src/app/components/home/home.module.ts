import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavbarModule } from '../navbar/navbar.module';
import { FrontModule } from 'src/app/components/home/front/front.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FrontModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
