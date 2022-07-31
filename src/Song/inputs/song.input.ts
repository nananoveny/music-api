import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class SongInput {
  @Field()
  imageUri: string;
  @Field()
  uri: string;
  @Field()
  title: string;
  @Field()
  artist: string;
}
