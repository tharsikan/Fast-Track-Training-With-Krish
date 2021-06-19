import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PetCreateDto } from '../dto/createPet.dto';
import { Pet, PetDocument } from '../schemas/pet.schema';

@Injectable()
export class PetReposictory {
  constructor(@InjectModel(Pet.name) private petModel: Model<PetDocument>) {}

  async create(createPetDto: PetCreateDto): Promise<Pet> {
    const newPet = new this.petModel(createPetDto);
    return await newPet.save();
  }
  async findAll(): Promise<Pet[]> {
    return await this.petModel.find();
  }
}
