import { TrainsModule } from './trains/trains.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TrainsModule,
    MongooseModule.forRoot(
      'mongodb+srv://kir8mir:1239875@cluster0.rm6m5of.mongodb.net/train-schedule?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
