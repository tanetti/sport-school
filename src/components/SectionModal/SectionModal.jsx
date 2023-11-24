import PropTypes from 'prop-types';
import { Modal } from '@/components/shared';

export const SectionModal = ({ isOpened, closeModal, idControls }) => (
  <Modal
    idControls={idControls}
    isOpened={isOpened}
    closeModal={closeModal}
    title="Відділення"
  >
    123
  </Modal>
);

SectionModal.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  idControls: PropTypes.string.isRequired,
};
