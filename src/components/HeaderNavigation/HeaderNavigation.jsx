import { useEffect, useState } from 'react';
import { ContactModal } from '@/components';
import { SpriteIcon } from '@/components/shared';
import { MobileMenuButton } from './components';
import {
  NavigationButton,
  NavigationContainer,
  NavigationLink,
} from './HeaderNavigation.styled';

export const HeaderNavigation = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isContactModalOpened, setIsContactModalOpened] = useState(false);

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
          <SpriteIcon symbol="home" />

          <span>ГОЛОВНА</span>
        </NavigationLink>

        <NavigationLink to="/about">
          <SpriteIcon symbol="info" />

          <span>ПРО НАС</span>
        </NavigationLink>

        <NavigationButton
          type="button"
          onClick={() => setIsContactModalOpened(true)}
        >
          <SpriteIcon symbol="contact" />

          <span>КОНТАКТИ</span>
        </NavigationButton>
      </NavigationContainer>

      <MobileMenuButton
        isMenuOpened={isMenuOpened}
        setIsMenuOpened={setIsMenuOpened}
      />

      <ContactModal
        isOpened={isContactModalOpened}
        closeModal={() => setIsContactModalOpened(false)}
      />
    </>
  );
};
