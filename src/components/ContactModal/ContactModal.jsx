import PropTypes from 'prop-types';
import { Modal } from '@/components/shared';
import { GeoLink, MapFrame } from './ContactModal.styled';

export const ContactModal = ({ isOpened, closeModal }) => {
  return (
    <Modal isOpened={isOpened} closeModal={closeModal} title="Контакти">
      <GeoLink
        href="https://maps.app.goo.gl/nejgGh2bNBQMHvvBA"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Відкрити навігацію на Google Maps"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 14a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-2a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
          />

          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.3 11.6A9.6 9.6 0 0 0 12 0C6 0 1.4 5.8 2.7 11.6c1 4.7 5 9.2 7.5 11.6 1 1 2.6 1 3.6 0 2.4-2.4 6.5-7 7.5-11.6ZM12 2c4.7 0 8.3 4.6 7.3 9.1-.5 2.2-1.6 4.2-2.8 6a36.2 36.2 0 0 1-4 4.7c-.3.3-.7.3-1 0a36.2 36.2 0 0 1-4-4.7 16.8 16.8 0 0 1-2.8-6A7.6 7.6 0 0 1 12 2Z"
          />
        </svg>

        <span>Слобожанське, вулиця Спортивна 4</span>
      </GeoLink>

      <MapFrame
        aria-label="Мапа Google"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d42264.08576580302!2d35.0451878!3d48.5427104!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d959d18e43ae7f%3A0x233d7f91acc25229!2z0KHQv9C-0YDRgtC60L7QvNC_0LvQtdC60YEgItCh0LvQvtCx0L7QttCw0L3RgdC60LjQuSI!5e0!3m2!1suk!2sua!4v1699974841930!5m2!1suk!2sua"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Modal>
  );
};

ContactModal.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
