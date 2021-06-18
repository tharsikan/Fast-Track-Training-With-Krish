import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CatBreed, DogBreed, Pet, PetType } from '../Pet.model';
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
  public petType: typeof PetType = PetType;
  public dogBreed: typeof DogBreed = DogBreed;
  public catBreed: typeof CatBreed = CatBreed;
  pet: Pet = {
    id: '',
    name: '',
    age: 0,
    type: PetType.DOG,
    breed: DogBreed.GERMAN_SHEPHERD
  };
  constructor(private petService: PetService) { }
  ngOnInit(): void {}

  crete(anagramForm: NgForm): void {
    // this.tempSubject = this.pet.subject;
    // this.tempPredicate = this.pet.predicate;
    // this.petService.create();
  }

}
