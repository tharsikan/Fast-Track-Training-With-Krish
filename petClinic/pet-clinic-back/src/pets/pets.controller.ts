import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { PetType, CatBreed, DogBreed } from './enums/pet.enum';
import { PetsService } from './pets.service';
import { PetSearchDto } from './dto/searchPet.dto';
import { PetUpdateDto } from './dto/updatePet.dto';
import { PetCreateDto } from './dto/createPet.dto';
import { Pet } from './schemas/pet.schema';

@Controller('pets')
export class PetsController {
  constructor(private petsServices: PetsService) {}
  @Get()
  async getAllPets(@Query() params: PetSearchDto): Promise<Pet[]> {
    return await this.petsServices.getAllPets();
  }

  @Post()
  async cretePet(@Body() petCreateDto: PetCreateDto): Promise<Pet> {
    return await this.petsServices.cretePet(petCreateDto);
  }

  // @Get('/:id')
  // getPetById(@Param('id') id: string) {
  //   return this.petsServices.getPetById(id);
  // }

  // @Put('/:id')
  // updatePet(@Param('id') id: string, @Body() petUpdateDto: PetUpdateDto) {
  //   console.log('pundai' + id + petUpdateDto);
  //   petUpdateDto.id = id;
  //   return this.petsServices.updatePet(petUpdateDto);
  // }

  // @Delete('/:id')
  // @HttpCode(204)
  // deletePet(@Param('id') id: string) {
  //   if (!this.petsServices.deletePet(id)) {
  //     throw new NotFoundException('not able to find ped');
  //   }
  // }
}
