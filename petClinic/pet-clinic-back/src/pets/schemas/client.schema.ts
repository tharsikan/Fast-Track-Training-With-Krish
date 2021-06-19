import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Pet } from './pet.schema';

export type ClientDocument = Client & Document;
@Schema()
export class Client {
  @Prop()
  id: string;
  @Prop({ required: true })
  name: string;
  @Prop()
  age: number;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Pet' })
  petId: Pet;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
