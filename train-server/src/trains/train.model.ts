import * as mongoose from 'mongoose';
import { networkInterfaces } from 'os';

export interface RouteInfo {
  routeInfo: [
    {
      date: [
        {
          city: string;
        },
      ];
    },
  ];
}

export const TrainSchema = new mongoose.Schema({
  name: { type: String, required: true },
  routeInfo: { type: Array, required: true },
});

export interface Train extends mongoose.Document {
  id: string;
  name: string;
  routeInfo: RouteInfo;
}
