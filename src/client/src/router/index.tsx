import { createBrowserRouter } from 'react-router-dom';
import App from '../components/App';
import ChatBox from '../components/Chats/ChatBox';
import Auth from '../components/Auth/Auth';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/signup',
        element: <Auth />,
      },
      {
        path: '/login',
        element: <Auth />,
      },
      {
        path: '/rooms/:roomId',
        element: <ChatBox />,
      },
    ],
  },
]);
