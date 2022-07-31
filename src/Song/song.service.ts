import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Song } from 'src/Song/interfaces/song.interface';
import { SongInput } from './inputs/song.input';

@Injectable()
export class SongService {
  constructor(@InjectModel('Song') private songModel: Model<Song>) {}

  async create(createSongDto: SongInput): Promise<Song> {
    const createdSong = new this.songModel(createSongDto);
    return createdSong.save();
  }

  async findAll(): Promise<Song[]> {
    return this.songModel.find().exec();
  }
}
