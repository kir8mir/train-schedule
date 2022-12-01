import * as mongoose from 'mongoose';

export const TrainSchema = new mongoose.Schema({
  name: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  departure: { type: Date, required: true },
  arrival: { type: Date, required: true },
});

export interface Train extends mongoose.Document {
  id: string;
  name: string;
  from: string;
  to: string;
  departure: Date;
  arrival: Date;
}
