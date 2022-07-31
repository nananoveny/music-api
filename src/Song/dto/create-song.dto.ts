import { Field, ObjectType, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class SongType {
  @Field(() => ID)
  id: string;
  @Field()
  imageUri: string;
  @Field()
  uri: string;
  @Field()
  title: string;
  @Field()
  artist: string;
}
