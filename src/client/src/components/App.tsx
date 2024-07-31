import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

export default function App(): JSX.Element {
  return (
    <main className="app">
      <Header />
      <Outlet />
    </main>
  );
}
