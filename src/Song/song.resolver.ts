import { SongService } from './song.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SongType } from './dto/create-song.dto';
import { SongInput } from './inputs/song.input';

@Resolver()
export class SongResolver {
  constructor(private songService: SongService) {}

  @Query(() => [SongType])
  async songs() {
    return this.songService.findAll();
  }

  @Mutation(() => SongType)
  async createSong(@Args('input') input: SongInput) {
    return this.songService.create(input);
  }
}
