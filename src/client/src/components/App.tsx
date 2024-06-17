import { useEffect } from 'react';
import * as socketIO from 'socket.io-client';

const socket = socketIO.connect('http://localhost:5000');

export default function App(): JSX.Element {
  useEffect(() => {
    socket.emit('message', JSON.stringify({ message: 'text' }));
  }, []);

  return <main>APP</main>;
}
