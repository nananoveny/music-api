import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlbumResolver } from './album.resolver';
import { AlbumSchema } from './album.schema';
import { AlbumService } from './album.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Album', schema: AlbumSchema }]),
  ],
  providers: [AlbumResolver, AlbumService],
})
export class AlbumModule {}
