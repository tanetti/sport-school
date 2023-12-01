import PropTypes from 'prop-types';
import { useContext, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RequestModalContext } from '@/utilities';
import { ContactModal, SectionModal } from '@/components';
import { SpriteIcon } from '@/components/shared';
import { MobileMenuButton } from './components';
import {
  SECTIONS,
  FACEBOOK,
  INSTAGRAM,
  YOUTUBE,
  PHONE,
  MAIL,
  LOCATION,
} from '@/constants';
import {
  ContactLink,
  ContactList,
  LinkContainer,
  MainNavigationList,
  NavigationButton,
  NavigationContainer,
  NavigationLink,
  RequestButton,
  SocialLink,
  SocialLinkYouTube,
  SocialsList,
} from './HeaderNavigation.styled';

const sectionLocations = SECTIONS.map(({ name }) => name);

export const HeaderNavigation = ({ isScrolled }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isSectionMenuOpened, setIsSectionMenuOpened] = useState(false);
  const [isContactModalOpened, setIsContactModalOpened] = useState(false);
  const { isRequestModalOpened, setIsRequestModalOpened } =
    useContext(RequestModalContext);
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
      <NavigationContainer
        id="nav-container"
        isMenuOpened={isMenuOpened}
        isScrolled={isScrolled}
      >
        <MainNavigationList>
          <li>
            <NavigationLink to="/">
              <SpriteIcon symbol="home" />

              <span>Головна</span>
            </NavigationLink>
          </li>

          <li>
            <NavigationLink to="/about">
              <SpriteIcon symbol="info" />

              <span>Про нас</span>
            </NavigationLink>
          </li>

          <li>
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
          </li>

          <li>
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
          </li>
        </MainNavigationList>

        <RequestButton
          isScrolled={isScrolled}
          type="button"
          aria-expanded={isRequestModalOpened}
          aria-controls="request_modal"
          aria-haspopup="dialog"
          onClick={() => setIsRequestModalOpened(true)}
        >
          Записатися
        </RequestButton>

        <LinkContainer>
          <ContactList>
            <li>
              <ContactLink href={PHONE.link} aria-label={PHONE.aria}>
                <SpriteIcon symbol="phone" />
              </ContactLink>
            </li>

            <li>
              <ContactLink href={MAIL.link} aria-label={MAIL.aria}>
                <SpriteIcon symbol="mail" />
              </ContactLink>
            </li>

            <li>
              <address>
                <ContactLink
                  href={LOCATION.link}
                  aria-label={LOCATION.aria}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SpriteIcon symbol="location" />
                </ContactLink>
              </address>
            </li>
          </ContactList>

          <SocialsList>
            <li>
              <SocialLink
                href={FACEBOOK.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={FACEBOOK.aria}
              >
                <SpriteIcon symbol="facebook" />
              </SocialLink>
            </li>

            <li>
              <SocialLink
                href={INSTAGRAM.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={INSTAGRAM.aria}
              >
                <SpriteIcon symbol="instagram" />
              </SocialLink>
            </li>

            <li>
              <SocialLinkYouTube
                href={YOUTUBE.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={YOUTUBE.aria}
              >
                <SpriteIcon symbol="youtube" />
              </SocialLinkYouTube>
            </li>
          </SocialsList>
        </LinkContainer>
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

HeaderNavigation.propTypes = { isScrolled: PropTypes.bool.isRequired };
