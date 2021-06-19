import { CatBreed, DogBreed, PetType } from '../enums/pet.enum';

export interface PetUpdateDto {
  id: string;
  name: string;
  age: number;
  type: PetType;
  breed: DogBreed | CatBreed;
}
