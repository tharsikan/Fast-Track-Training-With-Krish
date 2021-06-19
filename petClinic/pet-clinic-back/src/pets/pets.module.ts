import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PetReposictory } from './repository/pet.repository';
import { PetsController } from './pets.controller';
import { PetsService } from './pets.service';
import { Pet, PetSchema } from './schemas/pet.schema';
import { ClientController } from './client.controller';
import { ClientsService } from './clinets.service';
import { ClientReposictory } from './repository/client.repository';
import { Client, ClientSchema } from './schemas/client.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Pet.name, schema: PetSchema },
      { name: Client.name, schema: ClientSchema },
    ]),
  ],
  controllers: [PetsController, ClientController],
  providers: [PetsService, PetReposictory, ClientsService, ClientReposictory],
})
export class PetsModule {}
