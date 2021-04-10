import dotenv from 'dotenv';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import mongoose, { Connection } from 'mongoose';

import  db from './utils/db';
import schema from './schema';

import seed from './data/seed'

dotenv.config();

const app = express();

db.then(({connection}) => {
    seed(connection.db).then(() => {
        console.log('Done seeding')
    })
})

const server = new ApolloServer({
    schema,
    cors: true,
    playground: process.env.NODE_ENV === 'development' ? true : false,
    introspection: true,
    tracing: true,
    path: '/',
    useUnifiedTopology: true
});

server.applyMiddleware({
    app,
    path: '/',
    cors: true,
    onHealthCheck: () =>
        // eslint-disable-next-line no-undef
        new Promise((resolve, reject) => {
            if (mongoose.connection.readyState > 0) {
                resolve();
            } else {
                reject();
            }
        }),
});

app.listen({ port: process.env.PORT }, () => {
    console.log(`🚀 Server listening on port ${process.env.PORT}`);
    console.log(`😷 Health checks available at ${process.env.HEALTH_ENDPOINT}`);
});