import { Module } from '@nestjs/common';
import { PlacesController } from './places/places.controller';
import { PlacesService } from './places/places.service';
import { Client as MapsClient } from '@googlemaps/google-maps-services-js';
import { DirectionsController } from './directions/directions.controller';
import { DirectionsService } from './directions/directions.service';

/**
 * Configuração do provedor para o MapsClient.
 *    Como o google maps é uma dependência externa, que não é gerenciada pelo NestJS com os seus decorators, é necessário criar um provider para o MapsClient.
 * @provide Especifica o token que será usado para injetar a dependência.
 * @useValue Instancia um novo MapsClient que será fornecido quando o token for solicitado.
 */
const mapsProviderConfig = {
  provide: MapsClient,
  useValue: new MapsClient(),
};

@Module({
  imports: [],
  controllers: [PlacesController, DirectionsController],
  providers: [PlacesService, mapsProviderConfig, DirectionsService],
})
export class MapsModule {}
