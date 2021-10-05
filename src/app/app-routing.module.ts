import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { DonateComponent } from './components/donate/donate.component';
import { HomeComponent } from './components/home/home.component';
import { LiveComponent } from './components/live/live.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'donate', component: DonateComponent },
    { path: 'live', component: LiveComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: "", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
