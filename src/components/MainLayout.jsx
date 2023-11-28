import { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { RequestModalContext } from '@/utilities';
import { Header, Footer, RequestModal } from '@/components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MainLayout = () => {
  const [isRequestModalOpened, setIsRequestModalOpened] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <RequestModalContext.Provider
      value={{ isRequestModalOpened, setIsRequestModalOpened }}
    >
      <Header />

      <main style={{ display: 'flex', flexDirection: 'column' }}>
        <Suspense
          fallback={
            <div style={{ padding: 80, textAlign: 'center' }}>
              Завантаження...
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>

      <Footer />

      <RequestModal
        isOpened={isRequestModalOpened}
        closeModal={() => setIsRequestModalOpened(false)}
      />
    </RequestModalContext.Provider>
  );
};

export default MainLayout;
