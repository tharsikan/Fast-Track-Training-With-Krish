import { Pet } from '../schemas/pet.schema';

export interface CreateClientDto {
  name: string;
  age: number;
  petId: Pet;
}
