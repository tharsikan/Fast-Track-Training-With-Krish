import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CatBreed, DogBreed, Pet, PetType } from '../Pet.model';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-update',
  templateUrl: './pet-update.component.html',
  styleUrls: ['./pet-update.component.scss'],
})
export class PetUpdateComponent implements OnInit {
  public petType: typeof PetType = PetType;
  public dogBreed: typeof DogBreed = DogBreed;
  public catBreed: typeof CatBreed = CatBreed;
  paramId = '';
  pet: Pet = {
    id: '',
    name: '',
    age: 0,
    type: PetType.DOG,
    breed: DogBreed.GERMAN_SHEPHERD,
  };
  constructor(
    private activatedRoute: ActivatedRoute,
    private petService: PetService
  ) {
    this.activatedRoute.params.subscribe((data) => {
      this.paramId = data.id;
    });
  }
  updatePet(anagramForm: NgForm): void {
    this.petService.update(this.paramId, this.pet).subscribe((data) => {
      alert('successfully upddated');
    });
  }
  ngOnInit(): void {
    this.petService.getById(this.paramId).subscribe((data) => {
      this.pet = data;
    });
  }
}
