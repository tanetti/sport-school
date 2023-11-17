import PropTypes from 'prop-types';
import { STEPS } from './constants';
import { SECTIONS } from '@/constants';
import {
  Arrow,
  NavigatorContainer,
  PassedLabel,
  StepItem,
} from './StepNavigator.styled';

export const StepNavigator = ({ currentStep, watch }) => {
  const currentSection = watch('section');
  const sectionLabel = SECTIONS.find(
    ({ name }) => name === currentSection
  )?.label;

  return (
    <NavigatorContainer aria-hidden="true">
      {STEPS.map(({ number, actionLabel, showPassedLabel }) => {
        const active = currentStep === number;
        const passed = currentStep > number;
        const next = number - currentStep === 1;

        return (
          <StepItem key={number} active={active} passed={passed}>
            <span>{`${number} - ${actionLabel}`}</span>

            {showPassedLabel ? (
              <PassedLabel
                passed={passed}
              >{`${number} - ${sectionLabel}`}</PassedLabel>
            ) : null}

            <Arrow active={active} passed={passed} next={next} />
          </StepItem>
        );
      })}
    </NavigatorContainer>
  );
};

StepNavigator.propTypes = {
  currentStep: PropTypes.number.isRequired,
  watch: PropTypes.func.isRequired,
};
