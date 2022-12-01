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

@Controller('trains')
export class TrainsController {
  constructor(private readonly trainsService: TrainsService) {}

  @Post()
  async addTrain(
    @Body('name') trainName: string,
    @Body('from') from: string,
    @Body('to') to: string,
    @Body('departure') departure: Date,
    @Body('arrival') arrival: Date,
  ): Promise<any> {
    return await this.trainsService.addTrain(
      trainName,
      from,
      to,
      departure,
      arrival,
    );
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
    @Body('from') from: string,
    @Body('to') to: string,
    @Body('departure') departure: Date,
    @Body('arrival') arrival: Date,
  ) {
    return await this.trainsService.updateTrain(
      trainId,
      trainName,
      from,
      to,
      departure,
      arrival,
    );
  }

  @Delete(':trainId')
  async removeTrain(@Param('trainId') trainId: string) {
    await this.trainsService.removeTrain(trainId);

    return 'Deleted Successful';
  }
}
