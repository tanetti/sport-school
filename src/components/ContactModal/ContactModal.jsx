import PropTypes from 'prop-types';
import { Modal } from '@/components/shared';
import { MapFrame } from './ContactModal.styled';

export const ContactModal = ({ isOpened, closeModal }) => {
  return (
    <Modal isOpened={isOpened} closeModal={closeModal} title="Контакти">
      <MapFrame
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d33739.34478428803!2d35.04518781226858!3d48.542710388760305!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d959d18e43ae7f%3A0x233d7f91acc25229!2sSportkompleks%20%22Slobozhanskyy%22!5e0!3m2!1sen!2sua!4v1699971432108!5m2!1sen!2sua"
        width="600"
        height="450"
        allowFullScreen={false}
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
