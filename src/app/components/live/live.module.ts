import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveComponent } from './live.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { NavbarModule } from '../navbar/navbar.module';
import { LivestreamComponent } from './livestream/livestream.component';



@NgModule({
  declarations: [
      LiveComponent,
      ScheduleComponent,
      LivestreamComponent
  ],
  imports: [
    CommonModule,
    NavbarModule
  ],
  exports: [
      LiveComponent
  ]
})
export class LiveModule { }
