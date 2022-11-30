import { TrainsModule } from './trains/trains.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [TrainsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
