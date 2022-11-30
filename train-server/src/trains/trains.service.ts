import { Injectable, NotFoundException } from '@nestjs/common';
import { Train, RouteInfo } from './train.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TrainsService {
  trains: Train[] = [];

  constructor(
    @InjectModel('Train') private readonly trainModel: Model<Train>,
  ) {}

  async addTrain(name: string, routeInfo: RouteInfo) {
    const newTrain = new this.trainModel({ name, routeInfo });
    await newTrain.save();

    return newTrain;
  }

  async getAllTrains() {
    const trains = await this.trainModel.find().exec();

    return trains.map((train) => ({
      id: train.id,
      name: train.name,
      routeInfo: train.routeInfo,
    }));
  }

  async getTrain(trainId: string) {
    const train = await this.findTrain(trainId);

    return await {
      id: train.id,
      name: train.name,
      routeInfo: train.routeInfo,
    };
  }

  async updateTrain(trainId: string, name: string, routeInfo: RouteInfo) {
    const updatedTrain = await this.findTrain(trainId);

    if (name) {
      updatedTrain.name = name;
    }

    if (routeInfo) {
      updatedTrain.routeInfo = routeInfo;
    }
    updatedTrain.save();
    return updatedTrain;
  }

  async removeTrain(trainId: string) {
    await this.trainModel.deleteOne({ _id: trainId }).exec();
  }

  private async findTrain(trainId: string): Promise<Train> {
    let train;

    try {
      train = await this.trainModel.findById(trainId);
    } catch (error) {
      throw new NotFoundException('This train are not existing');
    }

    if (!train) {
      throw new NotFoundException('This train are not existing');
    }

    return train;
  }
}
