import PropTypes from 'prop-types';
import { SECTIONS } from '@/constants';
import { ButtonsContainer, FilledButton, OutlinedButton } from '../shared';
import {
  SectionInput,
  SectionItem,
  SectionLabel,
  SectionsContainer,
} from './SectionStep.styled';

export const SectionStep = ({ onStepChange, closeModal, setValue, watch }) => {
  const currentSection = watch('section');

  return (
    <>
      <SectionsContainer>
        <legend className="visually_hidden">Крок 1: Оберіть секцію.</legend>

        {SECTIONS.map(({ name, label, startAge, endAge, requestImages }) => (
          <SectionItem key={name}>
            <SectionInput
              className="visually_hidden"
              type="radio"
              name="section"
              id={name}
              active={currentSection === name}
              value={name}
              onChange={() => setValue('section', name)}
            />

            <SectionLabel
              htmlFor={name}
              active={currentSection === name}
              images={requestImages}
            >
              {label}

              <span>{`${startAge} - ${endAge} років`}</span>
            </SectionLabel>
          </SectionItem>
        ))}
      </SectionsContainer>

      <ButtonsContainer>
        <OutlinedButton type="button" onClick={closeModal}>
          Відмінити
        </OutlinedButton>

        <FilledButton
          type="button"
          disabled={!currentSection}
          onClick={() => onStepChange(2)}
        >
          Продовжити
        </FilledButton>
      </ButtonsContainer>
    </>
  );
};

SectionStep.propTypes = {
  onStepChange: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  watch: PropTypes.func.isRequired,
};
