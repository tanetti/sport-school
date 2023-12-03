import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import { SECTIONS } from '@/constants';
import { AllNewsItem, ControlsContainer, Switch } from './NewsControls.styled';

export const NewsControls = ({ setPage }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentSection = searchParams.get('section');

  const onSectionClick = ({ target }) => {
    setSearchParams({ section: target.name });
    setPage(1);
  };

  return (
    <ControlsContainer data-aos="fade-up">
      <AllNewsItem>
        <Switch
          type="button"
          isActive={currentSection === 'all'}
          name="all"
          onClick={onSectionClick}
        >
          Всі новини
        </Switch>
      </AllNewsItem>

      {SECTIONS.map(({ name, label }) => (
        <li key={name}>
          <Switch
            type="button"
            isActive={currentSection === name}
            name={name}
            onClick={onSectionClick}
          >
            {label}
          </Switch>
        </li>
      ))}
    </ControlsContainer>
  );
};

NewsControls.propTypes = {
  setPage: PropTypes.func.isRequired,
};
