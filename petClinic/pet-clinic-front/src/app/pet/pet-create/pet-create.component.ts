import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CatBreed, Pet, PetType } from '../Pet.model';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-create',
  templateUrl: './pet-create.component.html',
  styleUrls: ['./pet-create.component.scss']
})
export class PetCreateComponent implements OnInit {
isAnagram!: boolean;
  error!: string;
  tempSubject!: string;
  tempPredicate!: string;
  pet: Pet = {
    id: '',
    name: '',
    age: 0,
    type: PetType.CAT,
    breed: CatBreed.BIRMAN
  };
  constructor(private petService: PetService) { }
  ngOnInit(): void {}

  petSubmit(anagramForm: NgForm): void {
    // this.tempSubject = this.pet.subject;
    // this.tempPredicate = this.pet.predicate;
    // this.petService.create();
  }

}
