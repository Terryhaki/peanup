import 'reflect-metadata';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { NextRequest } from 'next/server';
import { buildSchema } from 'type-graphql';
import { Base } from '@/app/api/models/_base';

const apolloServer = new ApolloServer({
    schema: await buildSchema({
        resolvers: [Base],
    }),
});
const handler = startServerAndCreateNextHandler<NextRequest>(apolloServer, {
    context: async (req) => ({ req }),
});

export { handler as GET, handler as POST };
