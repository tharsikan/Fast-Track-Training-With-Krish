import { Body, Controller, Get, Post } from '@nestjs/common';

import { ClientsService } from './clinets.service';
import { CreateClientDto } from './dto/createClient.dto';
import { Client } from './schemas/client.schema';

@Controller('clients')
export class ClientController {
  constructor(private clientsServices: ClientsService) {}
  @Get()
  async getAll(): Promise<Client[]> {
    return await this.clientsServices.getAll();
  }

  @Post()
  async crete(@Body() createClientDto: CreateClientDto): Promise<Client> {
    return await this.clientsServices.crete(createClientDto);
  }
}
