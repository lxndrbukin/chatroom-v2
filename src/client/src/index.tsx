import './assets/styles.scss';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { store } from './store';
import { Provider } from 'react-redux';

const rootDiv = document.querySelector('#root');

if (rootDiv) {
  const root = createRoot(rootDiv);
  root.render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
