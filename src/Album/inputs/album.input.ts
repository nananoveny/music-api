import { Field, InputType, Int, ID, ObjectType } from '@nestjs/graphql';
import { Song } from 'src/Song/interfaces/song.interface';

@InputType()
export class AlbumInput {
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
