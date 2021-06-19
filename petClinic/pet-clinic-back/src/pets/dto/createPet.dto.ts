import { CatBreed, DogBreed, PetType } from '../enums/pet.enum';

export interface PetCreateDto {
  name: string;
  age: number;
  type: PetType;
  breed: DogBreed | CatBreed;
}
