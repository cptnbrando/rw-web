import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveComponent } from './live.component';
import { ScheduleComponent } from './schedule/schedule.component';



@NgModule({
  declarations: [
      LiveComponent,
      ScheduleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
      LiveComponent
  ]
})
export class LiveModule { }
