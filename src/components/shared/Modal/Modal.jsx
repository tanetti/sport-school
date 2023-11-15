import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, CloseButton, Title, Window } from './Modal.styled';

const portalElement = document.getElementById('portal');
const bodyElement = document.getElementsByTagName('body')[0];

export const Modal = ({ isOpened, closeModal, title, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = useCallback(() => {
    setIsVisible(false);

    bodyElement.classList.remove('modal');

    setTimeout(() => {
      closeModal();
    }, 600);
  }, [closeModal]);

  useEffect(() => {
    if (!isOpened) return;

    bodyElement.classList.add('modal');
    setIsVisible(true);
  }, [isOpened]);

  useEffect(() => {
    if (!isOpened) return;

    const focusableElements = portalElement.querySelectorAll(
      'button, [href], iframe, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKeyPress = event => {
      if (event.key !== 'Tab') return;

      const focusable = Array.from(focusableElements);
      const activeElementIndex = focusable.findIndex(
        element => element === document.activeElement
      );

      if (activeElementIndex === -1) {
        event.preventDefault();

        firstElement && firstElement.focus();
      } else {
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();

          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();

          firstElement.focus();
        }
      }
    };

    const handleEscapeKeyPress = event => {
      if (event.key !== 'Escape') return;

      handleClose();
    };

    window.addEventListener('keydown', handleTabKeyPress);
    window.addEventListener('keydown', handleEscapeKeyPress);

    return () => {
      window.removeEventListener('keydown', handleTabKeyPress);
      window.removeEventListener('keydown', handleEscapeKeyPress);
    };
  }, [handleClose, isOpened]);

  if (isOpened)
    return createPortal(
      <Backdrop isVisible={isVisible} onClick={handleClose}>
        <Window
          isVisible={isVisible}
          onClick={event => event.stopPropagation()}
        >
          <CloseButton
            type="button"
            aria-label="Закрити вікно"
            onClick={handleClose}
          >
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
              <path d="M195.2 195.2a64 64 0 0 1 90.5 0L512 421.5l226.3-226.3a64 64 0 0 1 90.5 90.5L602.5 512l226.3 226.3a64 64 0 0 1-90.5 90.5L512 602.5 285.7 828.8a64 64 0 0 1-90.5-90.5L421.5 512 195.2 285.7a64 64 0 0 1 0-90.5z" />
            </svg>
          </CloseButton>

          <Title>{title}</Title>

          {children}
        </Window>
      </Backdrop>,
      portalElement
    );
};

Modal.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
