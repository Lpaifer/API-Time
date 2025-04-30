import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.json({
        date: new Date().toLocaleString('pt-BR'),
        status: 'API Funcionando'
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});