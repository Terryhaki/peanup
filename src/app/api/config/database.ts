// import { Database } from './types.ts'; // this is the Database interface we defined earlier
import { Pool } from 'pg';
import { Kysely, PostgresDialect } from 'kysely';
import { vEnv } from '@/app/api/config/env';

const dialect = new PostgresDialect({
    pool: new Pool({
        database: vEnv.DATABASE,
        host: vEnv.HOST,
        user: vEnv.USER,
        port: vEnv.PORT,
        max: vEnv.MAX,
    }),
});

export const db = new Kysely({
    dialect,
});
