import { Mutation, ObjectType, Query } from 'type-graphql';
import { resolvers } from '@/app/api/core/_base';

@ObjectType()
export class Base {
    @Query(() => String)
    version(): string {
        return resolvers.version();
    }
}
