import express from 'express';
import bodyParser from 'body-parser';
import {listings} from './listings';

const app = express();
const port = 9000;

const one = 1;
const two = 2;

app.get('/', (_req, res) => res.send(`1 + 2 = ${one + two}`));

//listing
app.get('/listings', (_req, res) => {
  return res.send(listings);
})

//delete-listing


app.listen(port);

console.log(`[app]: http://localhost:${port}`);
