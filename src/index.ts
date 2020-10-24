import express from 'express';
import apiUser from './routes/user';
import { config } from './config';

const app = express();

app.use(express.json());

// app.get('/', (req, res, next) => {
//   res.status(200).json({
//     data: 'Corriendo',
//   });
// });

apiUser({ app });


app.listen(config.port ,() => {
  console.log(`\nListen in http://localhost:${config.port}`);
})