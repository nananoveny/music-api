import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AlbumInput } from './inputs/album.input';
import { Album } from './interfaces/album.interface';

@Injectable()
export class AlbumService {
  constructor(@InjectModel('Album') private albumModel: Model<Album>) {}

  async create(createAlbumDto: AlbumInput): Promise<Album> {
    const createAlbum = new this.albumModel(createAlbumDto);
    return createAlbum.save();
  }

  async findAll(): Promise<Album[]> {
    return this.albumModel.find().exec();
  }
}
