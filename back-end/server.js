import fsSync from 'fs';
import express from 'express';
import fs from 'fs/promises';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const DATA_DIR = path.resolve('data');

if (!fsSync.existsSync(DATA_DIR)) {
  fsSync.mkdirSync(DATA_DIR);
}

const FILE_PATH = path.resolve('data', 'text.txt');

app.post('/save', async (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'Текст не предоставлен' });

  try {
    await fs.appendFile(FILE_PATH, `${text}\n`, 'utf-8');
    console.log(`[LOG] Успешно сохранено: "${text}"`);
    res.status(200).json({ message: 'Успешно сохранено' });
  } catch (error) {
    console.error('[ERROR] Ошибка при записи в файл:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
  console.log(`📁 Данные сохраняются в: ${FILE_PATH}`);
});
