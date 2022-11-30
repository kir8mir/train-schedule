import { Injectable } from '@nestjs/common';
import { Train, RouteInfo } from './train.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TrainsService {
  trains: Train[] = [];

  addTrain(name: string, routeInfo: RouteInfo) {
    const newTrain = new Train(uuid(), name, routeInfo);
    this.trains.push(newTrain);

    return newTrain;
  }
}
