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
import { PetType, CatBreed, DogBreed } from './pet.model';
import { PetsService } from './pets.service';
import { PetSearchDto } from './PetSearch.dto';
import { PetUpdateDto } from './PetUpdate.dto';

@Controller('pets')
export class PetsController {
  constructor(private petsServices: PetsService) {}
  @Get()
  getAllPets(@Query() params: PetSearchDto) {
    if (Object.keys(params).length) {
      // if(params) not work becouse param is {}
      return this.petsServices.searchPet(params);
    } else {
      return this.petsServices.getAllPets();
    }
  }

  @Post()
  cretePet(
    @Body('name') name: string,
    @Body('age') age: number,
    @Body('type') type: PetType,
    @Body('breed') breed: CatBreed | DogBreed,
  ) {
    return this.petsServices.cretePet(name, age, type, breed);
  }

  @Get('/:id')
  getPetById(@Param('id') id: string) {
    return this.petsServices.getPetById(id);
  }

  @Put('/:id')
  updatePet(@Param('id') id: string, @Body() petUpdateDto: PetUpdateDto) {
    console.log('pundai' + id + petUpdateDto);
    petUpdateDto.id = id;
    return this.petsServices.updatePet(petUpdateDto);
  }

  @Delete('/:id')
  @HttpCode(204)
  deletePet(@Param('id') id: string) {
    if (!this.petsServices.deletePet(id)) {
      throw new NotFoundException('not able to find ped');
    }
  }
}
