import { Controller, Get, Query } from '@nestjs/common';
import { PlacesService } from './places.service';

@Controller('places') //O que é definido aqui é um prefixo para as rotas
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Get()
  findPlaces(@Query('text') text: string) {
    return this.placesService.findPlaces(text);
  }
}
