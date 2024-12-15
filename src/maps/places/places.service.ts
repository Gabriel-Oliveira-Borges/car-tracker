import { Injectable } from '@nestjs/common';
import {
  Client as MapsClient,
  PlaceInputType,
} from '@googlemaps/google-maps-services-js';
import { ConfigService } from '@nestjs/config';
import { EnvVarsKeys } from '../../utils/consts';

@Injectable()
export class PlacesService {
  constructor(
    private readonly mapsClient: MapsClient,
    private readonly configService: ConfigService,
  ) {}

  async findPlaces(text: string) {
    const { data } = await this.mapsClient.findPlaceFromText({
      params: {
        input: text,
        inputtype: PlaceInputType.textQuery,
        fields: ['place_id', 'formatted_address', 'geometry', 'name'],
        key: this.configService.get(EnvVarsKeys.GOOGLE_MAPS_API_KEY),
      },
    });

    return data;
  }
}
