import { CatBreed, DogBreed, PetType } from './pet.model';

export interface PetUpdateDto {
  id: string; // comes in url path  /12 => /:id     => @Path('id') id: string
  name: string; // comes in url incode ?number=12  => @Query('price') price: number
  //                or       json body              => @Body('price') price: number
  age: number;
  type: PetType;
  breed: DogBreed | CatBreed;
}
