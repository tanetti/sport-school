import PropTypes from 'prop-types';
import { Modal } from '@/components/shared';

export const RequestModal = ({ isOpened, closeModal }) => (
  <Modal isOpened={isOpened} closeModal={closeModal} title="Запит запису">
    123
  </Modal>
);

RequestModal.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
