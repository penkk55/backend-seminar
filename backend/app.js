require('dotenv').config();
const express = require('express');

const app = express();
const cors = require('cors');
const bodyParser = require('body-parser'); // option 1 get body JSON

// const router = express.Router();
const ApiRouter = require('./api/index');

const port = process.env.PORT;

// config server
const config = require('./config2');

const CONNECT = require('./lib/connect');

const postgress = new CONNECT(config.postgress);

app.use(cors());
app.use(express.json()); // option 2 // get body JSON

// config req to send to any ctrl to use it
app.use((req, res, next) => {
  req.config = config;
  req.postgress = postgress;
  next();
});
app.use('/api', [bodyParser.json({ limit: '10mb' })], ApiRouter);

app.get('/', (req, res) => {
  res.json({
    ok: 1,
  });
});

app.listen(port);
console.log(`app listening on ${port}`);
// const pg = require('./config');
// const call = async () => {
//   // console.log('3333', pg);
//   const data = await pg('user').then((d) => d[0]);
//   console.log('4444', data.name);
// };
// call();
