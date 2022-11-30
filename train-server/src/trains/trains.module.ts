import { TrainsService } from './trains.service';
import { TrainsController } from './trains.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [TrainsController],
  providers: [TrainsService],
})
export class TrainsModule {}
