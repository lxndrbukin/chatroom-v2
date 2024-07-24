import express from 'express';
import cors from 'cors';
import http from 'http';
import passport from 'passport';
import session from 'express-session';
import cookieSession from 'cookie-session';
import { keys } from './keys';
import { io } from './socket';
import { mongoDB } from './mongodb';

const app = express();
app.use(cors());

app.use(passport.initialize());
app.use(passport.session());

app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true },
  })
);

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

const server = http.createServer(app);

const socketIO = require('socket.io')(server, {
  cors: 'http://localhost:3000',
});

io(socketIO);
mongoDB();

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log('SERVER RUNNING ON PORT', PORT));
