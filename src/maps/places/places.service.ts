import { Injectable } from '@nestjs/common';

@Injectable()
export class PlacesService {
  findPlaces(text: string) {
    return `Finding places with the text: ${text}`;
  }
}
