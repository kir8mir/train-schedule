import { Injectable, NotFoundException } from '@nestjs/common';
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

  getAllTrains() {
    return [...this.trains];
  }

  getTrain(trainId: string) {
    const train = this.trains.find((singleTrain) => singleTrain.id === trainId);

    if (!train) {
      throw new NotFoundException('This train are not existing');
    }

    return { ...train };
  }
}
