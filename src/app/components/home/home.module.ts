import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FrontModule } from 'src/app/components/home/front/front.module';
import { BioComponent } from './bio/bio.component';
import { FeedComponent } from './feed/feed.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    HomeComponent,
    BioComponent,
    FeedComponent
  ],
  imports: [
    CommonModule,
    FrontModule,
    FontAwesomeModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
