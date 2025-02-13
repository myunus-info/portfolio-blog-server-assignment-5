/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';
import router from './app/routes';
import morgan from 'morgan';

const app: Application = express();

//parsers
app.use(express.json());

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// logging
app.use(morgan('dev'));

// application routes
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to my portfolio-blog application' });
});

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
