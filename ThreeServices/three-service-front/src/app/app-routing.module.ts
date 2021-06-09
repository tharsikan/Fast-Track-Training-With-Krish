import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnagramComponent } from './home/anagram/anagram.component';
import { OccurrenceComponent } from './home/occurrence/occurrence.component';
import { NthLargeComponent } from './home/nth-large/nth-large.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'anagram', component: AnagramComponent },
  { path: 'occurrence', component: OccurrenceComponent },
  { path: 'nth-large', component: NthLargeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  AnagramComponent,
  OccurrenceComponent,
  NthLargeComponent,
  HomeComponent,
  PageNotFoundComponent
];
