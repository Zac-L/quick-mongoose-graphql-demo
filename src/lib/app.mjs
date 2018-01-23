import express from 'express';
const app = express();
import morgan from 'morgan';
import apolloServer from 'apollo-server-express';
const { graphqlExpress, graphiqlExpress } = apolloServer;
import graphqlTools from 'graphql-tools';
const { makeExecutableSchema } = graphqlTools;
import typeDefs from './models/schema';
import resolvers from './resolvers';
import Cat from './models/cat';

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});


app.use('/graphql', express.json(), graphqlExpress({ schema, context: { Cat } }));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
app.use(morgan('dev'));

export default app;