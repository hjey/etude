'use strict';

import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

type Data = {
  country: string;
  family_name: string;
  job: string;
  age: number
};

const sendData: Data = {
  country: "Iran",
  family_name: "Muhamad",
  job: "Student",
  age: 27
};

app.get('/get', (req: Request, res: Response) => {
  // res.send('Express + TypeScript Server is running 🤷‍♂️');
  res.send(sendData);
});

app.listen(port);
