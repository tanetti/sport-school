import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { SpriteIcon } from '@/components/shared';
import {
  Backdrop,
  BackgroundContainer,
  BottomGradient,
  CloseButton,
  ContentContainer,
  Title,
  Window,
} from './Modal.styled';

const portalElement = document.getElementById('portal');
const bodyElement = document.getElementsByTagName('body')[0];

export const Modal = ({
  isOpened,
  closeModal,
  focusTrigger,
  title,
  children,
  scrollContainerRef,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [isBackdropBlocked, setIsBackdropBlocked] = useState(false);

  const onBackdropClick = () => {
    if (isBackdropBlocked) return setIsBackdropBlocked(false);

    closeModal();
    setIsBackdropBlocked(false);
  };

  useEffect(() => {
    if (!isOpened) {
      setIsVisible(false);

      bodyElement.classList.remove('modal');

      setTimeout(() => {
        setIsRendered(false);
        closeModal();
      }, 600);

      return;
    }

    bodyElement.classList.add('modal');
    setIsRendered(true);

    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, [closeModal, isOpened]);

  useEffect(() => {
    if (!isRendered) return;

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

      closeModal();
    };

    window.addEventListener('keydown', handleTabKeyPress);
    window.addEventListener('keydown', handleEscapeKeyPress);

    return () => {
      window.removeEventListener('keydown', handleTabKeyPress);
      window.removeEventListener('keydown', handleEscapeKeyPress);
    };
  }, [closeModal, isRendered, focusTrigger]);

  if (isRendered)
    return createPortal(
      <Backdrop isVisible={isVisible} onClick={onBackdropClick}>
        <Window
          isVisible={isVisible}
          onClick={event => event.stopPropagation()}
          onMouseDownCapture={() => setIsBackdropBlocked(true)}
          onMouseUpCapture={() => setIsBackdropBlocked(false)}
        >
          <ContentContainer ref={scrollContainerRef}>
            <Title>{title}</Title>

            {children}
          </ContentContainer>

          <BackgroundContainer />

          <BottomGradient />

          <CloseButton
            type="button"
            aria-label="Закрити вікно"
            onClick={closeModal}
          >
            <SpriteIcon symbol="close" />
          </CloseButton>
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
  scrollContainerRef: PropTypes.object,
};
