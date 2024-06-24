import { Outlet } from 'react-router-dom';

export default function App(): JSX.Element {
  return (
    <main className="app">
      <Outlet />
    </main>
  );
}
