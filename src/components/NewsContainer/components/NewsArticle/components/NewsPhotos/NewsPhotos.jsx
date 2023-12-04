import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { NewsPhotoModal } from '@/components';
import { getImagesUrl } from './utilities';
import { StyledSwiper, StyledSwiperSlide } from './NewsPhotos.styled';

export const NewsPhotos = ({ photoCount, date, filter }) => {
  const swiperRef = useRef(null);
  const [isPhotoModalOpened, setIsPhotoModalOpened] = useState(false);

  useEffect(() => {
    const swiperAutoplay = swiperRef.current?.swiper?.autoplay;

    if (!swiperAutoplay) return;

    if (isPhotoModalOpened) {
      swiperAutoplay.pause();
    } else {
      swiperAutoplay.resume();
    }
  }, [isPhotoModalOpened]);

  const onSlideClick = event => {
    event.stopPropagation();

    if (innerWidth < 960) return;

    setIsPhotoModalOpened(true);
  };

  const imagesUrl = getImagesUrl(photoCount, date, filter);

  if (imagesUrl?.length)
    return (
      <>
        <StyledSwiper
          ref={swiperRef}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            renderBullet: (_, className) => {
              return '<span class="' + className + '"></span>';
            },
          }}
          effect={'fade'}
          modules={[EffectFade, Autoplay, Pagination]}
        >
          {imagesUrl.map(url => (
            <StyledSwiperSlide
              key={url}
              image={url}
              role="button"
              onClick={onSlideClick}
            />
          ))}
        </StyledSwiper>

        <NewsPhotoModal
          isOpened={isPhotoModalOpened}
          closeModal={() => setIsPhotoModalOpened(false)}
          imagesUrl={imagesUrl}
        />
      </>
    );
};

NewsPhotos.propTypes = {
  photoCount: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
};
