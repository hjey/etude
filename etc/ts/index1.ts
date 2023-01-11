import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const name = process.env.MYNAME;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server is running 🤷‍♂️');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  console.log(`You are entering ${name}'s server`);
});

// package.json-scripts-demon 폴더를 src로 바꾸면 javascript 실행
// package.json-scripts-demon 폴더를 dist로 바꾸면 typescript 실행
