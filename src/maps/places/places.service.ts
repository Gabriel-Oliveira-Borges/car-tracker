import { Injectable } from '@nestjs/common';
import {
  Client as MapsClient,
  PlaceInputType,
} from '@googlemaps/google-maps-services-js';

@Injectable()
export class PlacesService {
  constructor(private readonly mapsClient: MapsClient) {}
  async findPlaces(text: string) {
    const { data } = await this.mapsClient.findPlaceFromText({
      params: {
        input: text,
        inputtype: PlaceInputType.textQuery,
        fields: ['place_id', 'formatted_address', 'geometry', 'name'],
        key: '',
      },
    });

    return data;
  }
}
