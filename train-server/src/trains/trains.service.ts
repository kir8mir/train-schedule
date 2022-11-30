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
    const train = this.findTrain(trainId)[0];

    return { ...train };
  }

  updateTrain(trainId: string, name: string, routeInfo: RouteInfo) {
    const [train, trainIndex] = this.findTrain(trainId);
    const updatedTrain = { ...train };

    if (name) {
      updatedTrain.name = name;
    }

    if (routeInfo) {
      updatedTrain.routeInfo = routeInfo;
    }

    this.trains[trainIndex] = updatedTrain;

    return updatedTrain;
  }

  removeTrain(trainId: string) {
    const [_, trainIndex] = this.findTrain(trainId);

    this.trains.splice(trainIndex, 1);
  }

  private findTrain(trainId: string): [Train, number] {
    const trainIndex = this.trains.findIndex(
      (singleTrain) => singleTrain.id === trainId,
    );
    const train = this.trains.find((singleTrain) => singleTrain.id === trainId);

    if (!train) {
      throw new NotFoundException('This train are not existing');
    }

    return [train, trainIndex];
  }
}
