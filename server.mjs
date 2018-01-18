
// import graphqlHTTP from 'express-graphql';
import http from 'http';
import app from  './src/lib/app';
import connect from './src/lib/connect';

connect();

const server = http.createServer(app);
const port = process.env.PORT || 3001;

server.listen(port, () => {
    console.log('server is running on', server.address().port);
});