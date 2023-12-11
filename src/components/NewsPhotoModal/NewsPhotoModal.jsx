import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Autoplay, Keyboard, Pagination, Navigation } from 'swiper/modules';
import { SpriteIcon } from '@/components/shared';
import 'swiper/css/navigation';
import {
  Backdrop,
  CloseButton,
  Image,
  StyledSwiper,
  StyledSwiperSlide,
} from './NewsPhotoModal.styled';

const portalElement = document.getElementById('portal');
const bodyElement = document.getElementsByTagName('body')[0];

export const NewsPhotoModal = ({ isOpened, closeModal, imagesUrl }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

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
      'button:not(:disabled), [href], iframe, input:not(:disabled), select, textarea, [tabindex]:not([tabindex="-1"])'
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
  }, [closeModal, isRendered]);

  const photoCount = imagesUrl?.length;

  if (photoCount && isRendered)
    return createPortal(
      <Backdrop isVisible={isVisible}>
        <StyledSwiper
          slidesPerView={'auto'}
          centeredSlides={true}
          spaceBetween={100}
          loop={photoCount > 1}
          keyboard={{
            enabled: photoCount > 1,
          }}
          navigation={photoCount > 1}
          autoplay={
            photoCount > 1
              ? {
                  delay: 10000,
                  disableOnInteraction: false,
                }
              : false
          }
          pagination={
            photoCount > 1
              ? {
                  clickable: true,
                  renderBullet: (_, className) => {
                    return '<span class="' + className + '"></span>';
                  },
                }
              : false
          }
          modules={[Autoplay, Keyboard, Pagination, Navigation]}
        >
          {imagesUrl.map(url => (
            <StyledSwiperSlide key={url}>
              <Image src={url} />
            </StyledSwiperSlide>
          ))}
        </StyledSwiper>

        <CloseButton
          type="button"
          aria-label="Закрити вікно"
          onClick={closeModal}
        >
          <SpriteIcon symbol="close" />
        </CloseButton>
      </Backdrop>,

      portalElement
    );
};

NewsPhotoModal.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  imagesUrl: PropTypes.array.isRequired,
};
