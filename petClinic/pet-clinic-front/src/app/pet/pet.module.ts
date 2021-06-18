import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetRoutingModule } from './pet-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PetCreateComponent } from './pet-create/pet-create.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { PetUpdateComponent } from './pet-update/pet-update.component';

@NgModule({
  declarations: [
    PetCreateComponent,
    PetDetailsComponent,
    PetUpdateComponent
  ],
  imports: [
    CommonModule,
    PetRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PetModule { }
