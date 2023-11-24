import PropTypes from 'prop-types';
import { SECTIONS } from '@/constants';
import { Modal } from '@/components/shared';
import {
  NavigationContainer,
  OutlinedButton,
  SectionItem,
  SectionLink,
  SectionsList,
} from './SectionModal.styled';

export const SectionModal = ({ isOpened, closeModal, idControls }) => (
  <Modal
    idControls={idControls}
    isOpened={isOpened}
    closeModal={closeModal}
    title="Відділення"
  >
    <NavigationContainer>
      <SectionsList>
        {SECTIONS.map(({ name, label, startAge, endAge, requestImages }) => (
          <SectionItem key={name}>
            <SectionLink
              to={`/${name}`}
              images={requestImages}
              onClickCapture={closeModal}
            >
              {label}

              <span>{`${startAge} - ${endAge} років`}</span>
            </SectionLink>
          </SectionItem>
        ))}
      </SectionsList>
    </NavigationContainer>

    <OutlinedButton type="button" onClick={closeModal}>
      Закрити
    </OutlinedButton>
  </Modal>
);

SectionModal.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  idControls: PropTypes.string.isRequired,
};
