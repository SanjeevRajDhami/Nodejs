import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/', (req, res) => {
    console.log(req)
    const user =  req.body
    console.log(user);
    res.json(user);
});

app.listen(5500,(req, res) => {
    console.log('Server is running on port 5500');
});