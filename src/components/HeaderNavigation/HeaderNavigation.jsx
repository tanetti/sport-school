import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ContactModal, SectionModal } from '@/components';
import { SpriteIcon } from '@/components/shared';
import { MobileMenuButton } from './components';
import { SECTIONS } from '@/constants';
import {
  NavigationButton,
  NavigationContainer,
  NavigationLink,
} from './HeaderNavigation.styled';

const sectionLocations = SECTIONS.map(({ name }) => name);

export const HeaderNavigation = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isSectionMenuOpened, setIsSectionMenuOpened] = useState(false);
  const [isContactModalOpened, setIsContactModalOpened] = useState(false);
  const sectionButtonRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    const buttonClassList = sectionButtonRef?.current?.classList;

    if (sectionLocations.some(name => pathname.includes(`/${name}`))) {
      buttonClassList?.add('active');
    } else {
      buttonClassList?.remove('active');
    }
  }, [location]);

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

          <span>Головна</span>
        </NavigationLink>

        <NavigationLink to="/about">
          <SpriteIcon symbol="info" />

          <span>Про нас</span>
        </NavigationLink>

        <NavigationButton
          ref={sectionButtonRef}
          role="menuitem"
          type="button"
          aria-expanded={isSectionMenuOpened}
          aria-controls="section_menu_modal"
          aria-haspopup="dialog"
          onClick={() => setIsSectionMenuOpened(true)}
        >
          <SpriteIcon symbol="sections" />

          <span>Відділення</span>
        </NavigationButton>

        <NavigationButton
          role="menuitem"
          type="button"
          aria-expanded={isContactModalOpened}
          aria-controls="contact_modal"
          aria-haspopup="dialog"
          onClick={() => setIsContactModalOpened(true)}
        >
          <SpriteIcon symbol="contact" />

          <span>Контакти</span>
        </NavigationButton>
      </NavigationContainer>

      <MobileMenuButton
        isMenuOpened={isMenuOpened}
        setIsMenuOpened={setIsMenuOpened}
      />

      <SectionModal
        idControls="section_menu_modal"
        isOpened={isSectionMenuOpened}
        closeModal={() => setIsSectionMenuOpened(false)}
      />

      <ContactModal
        idControls="contact_modal"
        isOpened={isContactModalOpened}
        closeModal={() => setIsContactModalOpened(false)}
      />
    </>
  );
};
