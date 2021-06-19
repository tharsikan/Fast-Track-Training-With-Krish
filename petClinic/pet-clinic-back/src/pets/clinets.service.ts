import { Injectable } from '@nestjs/common';
import { Client } from './schemas/client.schema';
import { CreateClientDto } from './dto/createClient.dto';
import { ClientReposictory } from './repository/client.repository';
@Injectable()
export class ClientsService {
  constructor(private clientRepository: ClientReposictory) {}
  private clients: Client[] = [];
  getAll(): Promise<Client[]> {
    return this.clientRepository.findAll();
  }

  crete(createClientDto: CreateClientDto): Promise<Client> {
    return this.clientRepository.create(createClientDto);
  }
}
