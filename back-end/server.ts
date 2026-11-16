import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

// ВАЖНО: 'database' — это имя сервиса из вашего docker-compose.yml.
const MONGO_URI = 'mongodb://database:27017/algo_db';

mongoose
  .connect(MONGO_URI)
  .then(() =>
    console.log('Успешно подключились к MongoDB через Docker Network!'),
  )
  .catch((err) => console.error('Ошибка подключения:', err));

app.get('/status', (req: Request, res: Response) => {
  res.json({ message: 'Бэкенд на TS работает и готов принимать алгоритмы' });
});

app.listen(3000, () => {
  console.log('Бэкенд запущен на порту 3000');
});
