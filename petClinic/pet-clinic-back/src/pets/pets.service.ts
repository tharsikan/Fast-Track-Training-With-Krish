import { Injectable } from '@nestjs/common';
import { Pet, PetType, DogBreed, CatBreed } from './pet.model';
import { v1 as uuidv1 } from 'uuid';
import { PetSearchDto } from './PetSearch.dto';
import { PetUpdateDto } from './PetUpdate.dto';
@Injectable()
export class PetsService {
  private pets: Pet[] = [];
  getAllPets() {
    return this.pets;
  }

  cretePet(
    name: string,
    age: number,
    type: PetType,
    breed: DogBreed | CatBreed,
  ) {
    const pet: Pet = {
      id: uuidv1(),
      name,
      age,
      type,
      breed,
    };
    this.pets.push(pet);
    return this.pets;
  }
  searchPet(petSearch: PetSearchDto) {
    const { type, name } = petSearch;
    let pets = this.getAllPets();
    if (type) {
      pets = pets.filter((pet) => pet.type === type);
    }
    if (name) {
      pets = pets.filter((pet) => pet.name.includes(name));
    }
    return pets;
  }
  getPetById(id: string): Pet {
    const pets = this.getAllPets();
    return pets.find((pet) => pet.id === id);
  }
  updatePet(updatePetDto: PetUpdateDto) {
    const { id, name, age, type, breed } = updatePetDto;
    const pet = this.getPetById(id);
    pet.name = name;
    pet.age = age;
    pet.type = type;
    pet.breed = breed;
    return pet;
  }
  deletePet(id: string) {
    const pets = this.getAllPets();
    this.pets = pets.filter((pet) => pet.id != id);
    return this.pets.length != pets.length;
  }
}
