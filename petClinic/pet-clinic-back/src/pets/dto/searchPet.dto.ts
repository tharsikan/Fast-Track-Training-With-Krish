import { PetType } from '../enums/pet.enum';

export interface PetSearchDto {
  type: PetType;
  name: string;
}
