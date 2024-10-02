import { createBrowserRouter } from 'react-router-dom';
import App from '../components/App';
import Chat from '../components/Chats/Chat';
import Auth from '../components/Auth/Auth';
import Rooms from '../components/Rooms/Rooms';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'signup',
        element: <Auth />,
      },
      {
        path: 'login',
        element: <Auth />,
      },
      {
        path: 'rooms',
        element: <Rooms />,
      },
      {
        path: '/rooms/:roomId',
        element: <Chat />,
      },
    ],
  },
]);
