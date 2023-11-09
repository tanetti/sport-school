import { useEffect, useState } from 'react';
import {
  NavigationButton,
  NavigationContainer,
  NavigationLink,
} from './HeaderNavigation.styled';
import { MobileMenuButton } from './components';

export const HeaderNavigation = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  useEffect(() => {
    const onClick = ({ target }) => {
      if (target?.id === 'nav-container') return;

      setIsMenuOpened(false);
    };

    if (isMenuOpened) {
      addEventListener('click', onClick);
    } else {
      removeEventListener('click', onClick);
    }

    return () => removeEventListener('click', onClick);
  }, [isMenuOpened]);

  return (
    <>
      <NavigationContainer id="nav-container" isMenuOpened={isMenuOpened}>
        <NavigationLink to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 495.4 495.4"
            xmlSpace="preserve"
          >
            <path d="m487 226-75-76V64a28 28 0 0 0-57 0v30l-56-56a75 75 0 0 0-103 0L8 226a28 28 0 0 0 40 40L236 78c6-6 17-6 23 0l188 188a28 28 0 1 0 40-40z" />
            <path d="M258 132c-6-6-15-6-20 0L73 297c-3 3-4 6-4 10v120c0 28 23 51 51 51h82V352h92v126h82c28 0 51-23 51-51V307c0-4-2-7-4-10L258 132z" />
          </svg>
          ГОЛОВНА
        </NavigationLink>

        <NavigationLink to="/about">
          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1zm0-3a1 1 0 0 0 0 2 1 1 0 0 0 0-2z"
              clipRule="evenodd"
            />
          </svg>
          ПРО НАС
        </NavigationLink>

        <NavigationButton type="button">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm-8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm-8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm8-16C7 0 0 6 0 14c0 4 2 8 6 11v7l7-4h3c9 0 16-6 16-14S25 0 16 0Z"
              fillRule="evenodd"
            />
          </svg>
          КОНТАКТИ
        </NavigationButton>
      </NavigationContainer>

      <MobileMenuButton
        isMenuOpened={isMenuOpened}
        setIsMenuOpened={setIsMenuOpened}
      />
    </>
  );
};
