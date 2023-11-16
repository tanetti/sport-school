import PropTypes from 'prop-types';
import { useState } from 'react';
import { SECTIONS } from '@/constants';
import {
  SectionInput,
  SectionItem,
  SectionLabel,
  SectionsContainer,
} from './SectionStep.styled';

export const SectionStep = ({ onStepChange }) => {
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

      <button type="button" onClick={() => onStepChange(2)}>
        next
      </button>
    </>
  );
};

SectionStep.propTypes = {
  onStepChange: PropTypes.func.isRequired,
};
