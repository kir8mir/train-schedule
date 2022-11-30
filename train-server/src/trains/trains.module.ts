import { TrainSchema } from './train.model';
import { TrainsService } from './trains.service';
import { TrainsController } from './trains.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Train', schema: TrainSchema }]),
  ],
  controllers: [TrainsController],
  providers: [TrainsService],
})
export class TrainsModule {}
