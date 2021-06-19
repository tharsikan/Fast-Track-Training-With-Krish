import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateClientDto } from '../dto/createClient.dto';
import { Client, ClientDocument } from '../schemas/client.schema';

@Injectable()
export class ClientReposictory {
  constructor(
    @InjectModel(Client.name) private petModel: Model<ClientDocument>,
  ) {}

  async create(createClientDto: CreateClientDto): Promise<Client> {
    const newClient = new this.petModel(createClientDto);
    return await newClient.save();
  }
  async findAll(): Promise<Client[]> {
    return await this.petModel.find();
  }
}
