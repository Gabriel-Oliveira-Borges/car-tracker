import { Module } from '@nestjs/common';
import { PlacesController } from './places/places.controller';
import { PlacesService } from './places/places.service';

@Module({
  imports: [],
  controllers: [PlacesController],
  providers: [PlacesService],
})
export class MapsModule {}
