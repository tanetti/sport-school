import PropTypes from 'prop-types';
import {
  BotLine,
  ButtonContainer,
  MidLine,
  TopLine,
} from './MobileMenuButton.styled';

export const MobileMenuButton = ({ isMenuOpened, setIsMenuOpened }) => {
  const onMobileMenuButtonClick = event => {
    event.stopPropagation();

    setIsMenuOpened(prevState => !prevState);
  };

  return (
    <ButtonContainer
      role="button"
      aria-label="Перемикач головного меню"
      onClick={onMobileMenuButtonClick}
    >
      <TopLine isMenuOpened={isMenuOpened} />

      <MidLine isMenuOpened={isMenuOpened} />

      <BotLine isMenuOpened={isMenuOpened} />
    </ButtonContainer>
  );
};

MobileMenuButton.propTypes = {
  isMenuOpened: PropTypes.bool.isRequired,
  setIsMenuOpened: PropTypes.func.isRequired,
};
