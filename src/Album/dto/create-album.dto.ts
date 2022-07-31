import { Field, ObjectType, Int, ID } from '@nestjs/graphql';
import { SongType } from 'src/Song/dto/create-song.dto';
import { Song } from 'src/Song/interfaces/song.interface';

@ObjectType()
export class AlbumType {
  @Field(() => ID)
  id: string;
  @Field()
  name: string;
  @Field()
  by: string;
  @Field(() => Int)
  numberOfLikes: number;
  @Field()
  imageUri: string;
  @Field()
  artistsHeadline: string;
  @Field(() => ObjectType)
  songs: Song[];
}
