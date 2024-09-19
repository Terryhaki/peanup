import { ObjectType, Query } from 'type-graphql';
import { vEnv } from '@/app/api/config/env';

@ObjectType()
export class Base {
    @Query(() => String)
    version(): string {
        return vEnv.NODE_ENV;
    }
}
