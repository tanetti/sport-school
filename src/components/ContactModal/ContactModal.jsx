import PropTypes from 'prop-types';
import { Modal, SpriteIcon } from '@/components/shared';
import {
  FACEBOOK,
  INSTAGRAM,
  YOUTUBE,
  PHONE,
  MAIL,
  LOCATION,
} from '@/constants';
import {
  ContactLink,
  ContactsList,
  LocationLink,
  MainContactsContainer,
  MapFrame,
  SocialLink,
  SocialsList,
} from './ContactModal.styled';

export const ContactModal = ({ isOpened, closeModal, idControls }) => (
  <Modal
    idControls={idControls}
    isOpened={isOpened}
    closeModal={closeModal}
    title="Контакти"
  >
    <MainContactsContainer>
      <ContactsList>
        <li>
          <ContactLink href={PHONE.link} aria-label={PHONE.aria}>
            <SpriteIcon symbol="phone" />

            <span>{PHONE.label}</span>
          </ContactLink>
        </li>

        <li>
          <ContactLink href={MAIL.link} aria-label={MAIL.aria}>
            <SpriteIcon symbol="mail" />

            <span>{MAIL.label}</span>
          </ContactLink>
        </li>
      </ContactsList>

      <SocialsList>
        <li>
          <SocialLink
            href={FACEBOOK.link}
            aria-label={FACEBOOK.aria}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SpriteIcon symbol="facebook" />
          </SocialLink>
        </li>

        <li>
          <SocialLink
            href={INSTAGRAM.link}
            aria-label={INSTAGRAM.aria}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SpriteIcon symbol="instagram" />
          </SocialLink>
        </li>

        <li>
          <SocialLink
            href={YOUTUBE.link}
            aria-label={YOUTUBE.aria}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SpriteIcon symbol="youtube" />
          </SocialLink>
        </li>
      </SocialsList>
    </MainContactsContainer>

    <LocationLink
      href={LOCATION.link}
      aria-label={LOCATION.aria}
      target="_blank"
      rel="noopener noreferrer"
    >
      <SpriteIcon symbol="location" />

      <span>{LOCATION.label}</span>
    </LocationLink>

    <MapFrame
      aria-label="Мапа Google"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d42264.08576580302!2d35.0451878!3d48.5427104!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d959d18e43ae7f%3A0x233d7f91acc25229!2z0KHQv9C-0YDRgtC60L7QvNC_0LvQtdC60YEgItCh0LvQvtCx0L7QttCw0L3RgdC60LjQuSI!5e0!3m2!1suk!2sua!4v1699974841930!5m2!1suk!2sua"
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </Modal>
);

ContactModal.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  idControls: PropTypes.string.isRequired,
};
