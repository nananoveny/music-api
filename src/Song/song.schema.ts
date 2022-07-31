// import * as mongoose from 'mongoose';
// const SongSchema = new mongoose.Schema({
//   imageUri: String,
//   uri: String,
//   title: String,
//   artist: String,
// });

// module.exports = mongoose.model('Song', SongSchema);
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Song {
  @Prop()
  imageUri: string;
  @Prop()
  uri: string;
  @Prop()
  title: string;
  @Prop()
  artist: string;
}

export const SongSchema = SchemaFactory.createForClass(Song);
