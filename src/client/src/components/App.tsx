import { useEffect } from 'react';
import { socket } from '../socket';

export default function App(): JSX.Element {
  useEffect(() => {
    socket.emit('message', JSON.stringify({ message: 'text' }));
  }, []);

  return <main>APP</main>;
}
