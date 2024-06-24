import { createBrowserRouter } from 'react-router-dom';
import App from '../components/App';
import ChatBox from '../components/Chats/ChatBox';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/rooms/:roomId',
        element: <ChatBox />,
      },
    ],
  },
]);
