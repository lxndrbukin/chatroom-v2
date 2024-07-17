import './assets/styles.scss';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const rootDiv = document.querySelector('#root');

if (rootDiv) {
  const root = createRoot(rootDiv);
  root.render(<RouterProvider router={router} />);
}
