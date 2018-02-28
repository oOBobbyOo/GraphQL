const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema.js');

const app = express();
const port = process.env.port || 4000;

app.use('/graphgl', expressGraphQL({
    schema: schema,
    pretty: true,
    graphiql: true
}));

app.listen(port, () => {
    console.log('Server is running on port 4000...');
});