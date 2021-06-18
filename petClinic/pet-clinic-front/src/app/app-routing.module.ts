import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientHomeComponent } from './client/client-home/client-home.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PetCreateComponent } from './pet/pet-create/pet-create.component';
import { PetDetailsComponent } from './pet/pet-details/pet-details.component';
import { PetHomeComponent } from './pet/pet-home/pet-home.component';
import { PetUpdateComponent } from './pet/pet-update/pet-update.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'pets', component: PetHomeComponent },
  { path: 'pet/create', component: PetCreateComponent },
  { path: 'pet/details', component: PetDetailsComponent },
  { path: 'pet/update/:id', component: PetUpdateComponent },
  { path: 'clients', component: ClientHomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  HomeComponent,
  PetHomeComponent,
  PetCreateComponent,
  PetDetailsComponent,
  PetUpdateComponent,
  ClientHomeComponent,
  PageNotFoundComponent,
];
