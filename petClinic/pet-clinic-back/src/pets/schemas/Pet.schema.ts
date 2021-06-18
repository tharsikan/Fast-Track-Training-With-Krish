import { Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CatBreed, DogBreed, PetType } from '../Pet.enum';

export type EmployeeDocument = Pet & Document;

export class Pet {
  @Prop()
  id: string;
  @Prop()
  name: string;
  @Prop()
  age: number;
  @Prop()
  type: PetType;
  @Prop()
  breed: CatBreed | DogBreed;
}
