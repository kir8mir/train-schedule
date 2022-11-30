import { TrainsService } from './trains.service';
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
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

  @Get()
  getAllTrains() {
    return this.trainsService.getAllTrains();
  }

  @Get(':trainId')
  getTrain(@Param('trainId') trainId: string) {
    return this.trainsService.getTrain(trainId);
  }
}
