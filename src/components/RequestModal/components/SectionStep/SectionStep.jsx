import PropTypes from 'prop-types';
import { useState } from 'react';
import { SECTIONS } from '@/constants';
import { ButtonsContainer, FilledButton, OutlinedButton } from '../shared';
import {
  SectionInput,
  SectionItem,
  SectionLabel,
  SectionsContainer,
} from './SectionStep.styled';

export const SectionStep = ({ onStepChange, closeModal }) => {
  const [checkedRadio, setCheckedRadio] = useState(null);

  return (
    <>
      <SectionsContainer>
        {SECTIONS.map(({ name, label, startAge, endAge, requestImages }) => (
          <SectionItem key={name}>
            <SectionInput
              className="visually_hidden"
              type="radio"
              name="section"
              id={name}
              active={checkedRadio === name}
              value={name}
              onChange={event => setCheckedRadio(event.target.value)}
            />

            <SectionLabel
              htmlFor={name}
              active={checkedRadio === name}
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

        <FilledButton type="button" onClick={() => onStepChange(2)}>
          Продовжити
        </FilledButton>
      </ButtonsContainer>
    </>
  );
};

SectionStep.propTypes = {
  onStepChange: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};
