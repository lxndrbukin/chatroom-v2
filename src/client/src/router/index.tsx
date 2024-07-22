import { createBrowserRouter } from 'react-router-dom';
import App from '../components/App';
import ChatBox from '../components/Chats/ChatBox';
import AuthSignUp from '../components/Auth/AuthSignUp';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/signup',
        element: <AuthSignUp />,
      },
      {
        path: '/rooms/:roomId',
        element: <ChatBox />,
      },
    ],
  },
]);
