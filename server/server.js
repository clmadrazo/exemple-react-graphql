import express from 'express';
import mongoose from 'mongoose';
import expreessGraphQl from 'express-graphql';
import schema from './schema'

const app = express();

mongoose.connect('mongodb://carlos-teste:teste12@ds229835.mlab.com:29835/workflow-teste-fortaleza');
const databaseConnection  = mongoose.connection;
databaseConnection.once('open', () => console.log('Connected'));
databaseConnection.on('error', error => console.log('Error:' + error))


app.use(express.static('dist/client'));
app.use('/graphql', expreessGraphQl({
  schema: schema,
  graphiql: true
}))

app.listen(4000, () => {
  console.log('listening');
});
