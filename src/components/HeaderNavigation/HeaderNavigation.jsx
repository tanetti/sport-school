import { useEffect, useState } from 'react';
import { NavigationContainer } from './HeaderNavigation.styled';
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
      <NavigationContainer
        id="nav-container"
        isMenuOpened={isMenuOpened}
      ></NavigationContainer>

      <MobileMenuButton
        isMenuOpened={isMenuOpened}
        setIsMenuOpened={setIsMenuOpened}
      />
    </>
  );
};
