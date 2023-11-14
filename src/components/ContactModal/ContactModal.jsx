import PropTypes from 'prop-types';
import { Modal } from '@/components/shared';
import { MapFrame } from './ContactModal.styled';

export const ContactModal = ({ isOpened, closeModal }) => {
  return (
    <Modal isOpened={isOpened} closeModal={closeModal} title="Контакти">
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
