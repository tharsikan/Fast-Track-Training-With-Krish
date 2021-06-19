import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CatBreed, DogBreed, PetType } from '../enums/pet.enum';

export type PetDocument = Pet & Document;

@Schema()
export class Pet {
  @Prop()
  id: string;
  @Prop({ required: true })
  name: string;
  @Prop()
  age: number;
  @Prop()
  type: PetType;
  @Prop()
  breed: CatBreed | DogBreed;
}

export const PetSchema = SchemaFactory.createForClass(Pet);
