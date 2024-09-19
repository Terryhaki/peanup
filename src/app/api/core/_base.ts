import { vEnv } from '@/app/api/config/env';

export const resolvers = {
    version: (): string => vEnv.ENV,
};
