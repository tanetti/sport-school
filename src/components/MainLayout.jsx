import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from '@/components';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const MainLayout = () => {
  useEffect(() => {
    AOS.init();
  }, []);

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
