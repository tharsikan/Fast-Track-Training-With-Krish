import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { MONGO_CONNECTION } from './app.properties';
import { AppService } from './app.service';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [PetsModule, MongooseModule.forRoot(MONGO_CONNECTION)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
