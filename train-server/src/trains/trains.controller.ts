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
  async addTrain(
    @Body('name') trainName: string,
    @Body('routeInfo') trainRouteInfo: RouteInfo,
  ): Promise<any> {
    return await this.trainsService.addTrain(trainName, trainRouteInfo);
  }

  @Get()
  async getAllTrains() {
    return await this.trainsService.getAllTrains();
  }

  @Get(':trainId')
  async getTrain(@Param('trainId') trainId: string) {
    return await this.trainsService.getTrain(trainId);
  }

  @Patch(':trainId')
  async updateTrain(
    @Param('trainId') trainId: string,
    @Body('name') trainName: string,
    @Body('routeInfo') routeInfo: RouteInfo,
  ) {
    return await this.trainsService.updateTrain(trainId, trainName, routeInfo);
  }

  @Delete(':trainId')
  async removeTrain(@Param('trainId') trainId: string) {
    await this.trainsService.removeTrain(trainId);

    return 'Deleted Successful';
  }
}
