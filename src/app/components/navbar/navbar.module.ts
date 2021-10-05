import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule // CLI adds AppRoutingModule to the AppModule's imports array
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
