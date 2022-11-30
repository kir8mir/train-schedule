import { TrainsService } from './trains.service';
import { Controller, Post, Body } from '@nestjs/common';
import { RouteInfo } from './train.model';

@Controller('trains')
export class TrainsController {
  constructor(private readonly trainsService: TrainsService) {}

  @Post()
  addTrain(
    @Body('name') trainName: string,
    @Body('routeInfo') trainRouteInfo: RouteInfo,
  ): any {
    return this.trainsService.addTrain(trainName, trainRouteInfo);
  }
}
