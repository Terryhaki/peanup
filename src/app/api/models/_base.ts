import { ObjectType, Query } from 'type-graphql';

@ObjectType()
export class Base {
    @Query(() => String)
    version(): string {
        return 'dev';
    }
}
