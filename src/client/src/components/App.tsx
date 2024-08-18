import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, getCurrentUser } from '../store';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

export default function App(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  return (
    <main className="app">
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </main>
  );
}
