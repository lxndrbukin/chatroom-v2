import express from 'express';
import cors from 'cors';
import http from 'http';

const app = express();
app.use(cors());

const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log('SERVER RUNNING ON PORT', PORT));
