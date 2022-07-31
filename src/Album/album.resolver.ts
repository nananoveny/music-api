import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AlbumService } from './album.service';
import { AlbumType } from './dto/create-album.dto';
import { AlbumInput } from './inputs/album.input';

@Resolver()
export class AlbumResolver {
  constructor(private albumService: AlbumService) {}

  @Query(() => [AlbumType])
  async albums() {
    return this.albumService.findAll();
  }

  @Mutation(() => AlbumType)
  async createAlbum(@Args('input') input: AlbumInput) {
    return this.albumService.create(input);
  }
}
