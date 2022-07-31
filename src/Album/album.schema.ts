// import * as mongoose from 'mongoose';
// const AlbumSchema = new mongoose.Schema({
//   name: String,
//   by: String,
//   numberOfLikes: Number,
//   imageUri: String,
//   artistHeadline: String,
//   song: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }],
// });
// module.exports = mongoose.model('Album', AlbumSchema);

import { Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Song } from 'src/Song/song.schema';

@Schema()
export class Album {
  @Prop()
  name: string;
  @Prop()
  by: string;
  @Prop(() => Int)
  numberOfLikes: number;
  @Prop()
  imageUri: string;
  @Prop()
  artistsHeadline: string;
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }] })
  songs: Song[];
}

export const AlbumSchema = SchemaFactory.createForClass(Album);
