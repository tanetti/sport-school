import PropTypes from 'prop-types';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { getImagesUrl } from './utilities';
import { StyledSwiper, StyledSwiperSlide } from './NewsPhotos.styled';

export const NewsPhotos = ({ photoCount, date, filter }) => {
  const imagesUrl = getImagesUrl(photoCount, date, filter);

  if (imagesUrl?.length)
    return (
      <StyledSwiper
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
          <StyledSwiperSlide key={url} image={url} />
        ))}
      </StyledSwiper>
    );
};

NewsPhotos.propTypes = {
  photoCount: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
};
