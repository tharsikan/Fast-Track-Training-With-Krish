export interface Pet {
  id: string;
  name: string;
  age: number;
  type: PetType;
  breed: DogBreed | CatBreed;
}
export enum PetType {
  CAT = 'CAT',
  DOG = 'DOG',
  OTHER = 'OTHER',
}
export enum DogBreed {
  BULLDOG = 'BULLDOG',
  GERMAN_SHEPHERD = 'GERMAN_SHEPHERD',
  ROTTWEILER = 'ROTTWEILER',
}
export enum CatBreed {
  PERSIAN_CAT = 'PERSIAN_CAT',
  RAGDOLL = 'RAGDOLL',
  BIRMAN = 'BIRMAN',
}
