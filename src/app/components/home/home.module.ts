import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FrontModule } from 'src/app/components/home/front/front.module';
import { BioComponent } from './bio/bio.component';
import { FeedComponent } from './feed/feed.component';



@NgModule({
  declarations: [
    HomeComponent,
    BioComponent,
    FeedComponent
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
