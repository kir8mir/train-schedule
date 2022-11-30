import { TrainsService } from './trains.service';
import {
  Controller,
  Post,
  Patch,
  Delete,
  Body,
  Get,
  Param,
} from '@nestjs/common';
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

  @Patch(':trainId')
  updateTrain(
    @Param('trainId') trainId: string,
    @Body('name') trainName: string,
    @Body('routeInfo') routeInfo: RouteInfo,
  ) {
    return this.trainsService.updateTrain(trainId, trainName, routeInfo);
  }

  @Delete(':trainId')
  removeTrain(@Param('trainId') trainId: string) {
    this.trainsService.removeTrain(trainId);

    return 'Deleted Successful';
  }
}
