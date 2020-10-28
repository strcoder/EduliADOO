import express from 'express';
import apiUser from './routes/user';
import { config } from './config';
import authApi from './routes/auth';
import { logErrors, wrapErrors, errorHandler } from './utils/middlewares/errorHandlers'
import notFoundHandler from './utils/middlewares/notFoundHandler'

const app = express();

app.use(express.json());

// app.get('/', (req, res, next) => {
//   res.status(200).json({
//     data: 'Corriendo',
//   });
// });

apiUser({ app });
authApi(app);

app.use(notFoundHandler);
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port ,() => {
  console.log(`\nListen in http://localhost:${config.port}`);
})