import express from 'express';
import morgan from 'morgan';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
// import bodyParser from 'body-parser';

const app = express();

const myGraphQLSchema = // ... define or import your schema here!

// app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));
app.use('/graphql', express.json(), graphqlExpress({ schema: myGraphQLSchema }));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })); // if you want GraphiQL enabled
app.use(morgan('dev'));

export default app;