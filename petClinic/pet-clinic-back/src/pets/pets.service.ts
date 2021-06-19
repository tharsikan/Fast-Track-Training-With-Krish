import { Injectable } from '@nestjs/common';
import { PetSearchDto } from './dto/searchPet.dto';
import { PetUpdateDto } from './dto/updatePet.dto';
import { Pet } from './schemas/pet.schema';
import { PetCreateDto } from './dto/createPet.dto';
import { PetReposictory } from './repository/pet.repository';
@Injectable()
export class PetsService {
  constructor(private petRepository: PetReposictory) {}
  private pets: Pet[] = [];
  getAllPets(): Promise<Pet[]> {
    return this.petRepository.findAll();
  }

  cretePet(petCreateDto: PetCreateDto): Promise<Pet> {
    return this.petRepository.create(petCreateDto);
  }
  // searchPet(petSearch: PetSearchDto) {
  //   const { type, name } = petSearch;
  //   let pets = this.getAllPets();
  //   if (type) {
  //     pets = pets.filter((pet) => pet.type === type);
  //   }
  //   if (name) {
  //     pets = pets.filter((pet) => pet.name.includes(name));
  //   }
  //   return pets;
  // }
  // getPetById(id: string): Pet {
  //   const pets = this.getAllPets();
  //   return pets.find((pet) => pet.id === id);
  // }
  // updatePet(updatePetDto: PetUpdateDto) {
  //   const { id, name, age, type, breed } = updatePetDto;
  //   const pet = this.getPetById(id);
  //   pet.name = name;
  //   pet.age = age;
  //   pet.type = type;
  //   pet.breed = breed;
  //   return pet;
  // }
  // deletePet(id: string) {
  //   const pets = this.getAllPets();
  //   this.pets = pets.filter((pet) => pet.id != id);
  //   return this.pets.length != pets.length;
  // }
}
