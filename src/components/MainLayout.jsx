import { Outlet } from 'react-router-dom';
import { Header, Footer } from '@/components';

export const MainLayout = () => {
  return (
    <>
      <Header />

      <main style={{ display: 'flex', flexDirection: 'column' }}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};
