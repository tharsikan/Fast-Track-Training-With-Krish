import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetRoutingModule } from './pet-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PetDetailsComponent } from './pet-details/pet-details.component';

@NgModule({
  declarations: [
    PetDetailsComponent
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
