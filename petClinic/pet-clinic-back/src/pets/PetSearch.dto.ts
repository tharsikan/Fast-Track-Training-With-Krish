import { PetType } from './pet.model';

export interface PetSearchDto {
  type: PetType;
  name: string;
}
