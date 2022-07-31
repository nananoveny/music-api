import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SongResolver } from './song.resolver';
import { SongService } from './song.service';
import { SongSchema } from './song.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Song', schema: SongSchema }])],
  providers: [SongResolver, SongService],
})
export class SongModule {}
