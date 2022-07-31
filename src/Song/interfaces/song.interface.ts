import { Document } from 'mongoose';

export interface Song extends Document {
  readonly imageUri: string;
  readonly Uri: string;
  readonly Title: string;
  readonly Artist: string;
}
