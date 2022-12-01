import { Injectable, NotFoundException } from '@nestjs/common';
import { Train } from './train.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TrainsService {
  constructor(
    @InjectModel('Train') private readonly trainModel: Model<Train>,
  ) {}

  async addTrain(
    name: string,
    from: string,
    to: string,
    departure: Date,
    arrival: Date,
  ) {
    const newTrain = new this.trainModel({
      name,
      from,
      to,
      departure,
      arrival,
    });
    await newTrain.save();

    return newTrain;
  }

  async getAllTrains() {
    const trains = await this.trainModel.find().exec();

    return trains.map((train) => ({
      id: train.id,
      name: train.name,
      from: train.from,
      to: train.to,
      departure: train.departure,
      arrival: train.arrival,
    }));
  }

  async getTrain(trainId: string) {
    const train = await this.findTrain(trainId);

    return await {
      id: train.id,
      name: train.name,
      from: train.from,
      to: train.to,
      departure: train.departure,
      arrival: train.arrival,
    };
  }

  async updateTrain(
    trainId: string,
    name: string,
    from: string,
    to: string,
    departure: Date,
    arrival: Date,
  ) {
    const updatedTrain = await this.findTrain(trainId);

    if (name) {
      updatedTrain.name = name;
    }

    if (to) {
      updatedTrain.to = to;
    }

    if (from) {
      updatedTrain.from = from;
    }

    if (departure) {
      updatedTrain.departure = departure;
    }

    if (arrival) {
      updatedTrain.arrival = arrival;
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
