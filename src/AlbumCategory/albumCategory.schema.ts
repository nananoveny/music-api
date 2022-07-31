// import * as mongoose from 'mongoose';
// export const AlbumCategorySchema = new mongoose.Schema({
//   title: String,
//   albums: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Album' }],
// });

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Album } from 'src/Album/album.schema';

@Schema()
export class AlbumCategory {
  @Prop()
  title: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Album' })
  album: Album;
}

export const AlbumCategorySchema = SchemaFactory.createForClass(AlbumCategory);
