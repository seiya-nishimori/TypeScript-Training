import express from 'express';
import cors from 'cors';
import type { Request, Response } from 'express';

const app = express();
const port = 8000;

// 許可証（CORS）の設定。これがないとフロント側は何も表示できません。
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.json({ message: "Hello from Backend! 通信成功です！" });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running at http://localhost:${port}`);
});