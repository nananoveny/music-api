import { Document } from 'mongoose';
import { Song } from 'src/Song/interfaces/song.interface';

export interface Album extends Document {
  readonly name: string;
  readonly by: string;
  readonly numberOfLikes: string;
  readonly imageUri: string;
  readonly artistsHeadline: string;
  readonly songs: Song[];
}
