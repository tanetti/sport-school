import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import throttle from 'lodash.throttle';
import { SpriteIcon } from '@/components/shared';
import { SCROLL_THROTTLE_DELAY } from '@/constants';
import { StyledButton } from './UpButton.styled';

export const UpButton = ({ targetElement }) => {
  const [isUpShown, setIsUpShown] = useState(false);
  const [verticalShift, setVerticalShift] = useState(0);

  useEffect(() => {
    const footerRef = document.getElementById('footer');

    const onScroll = () => {
      const footerRect = footerRef?.getBoundingClientRect();
      const vPos = innerHeight - footerRect?.top - 25;

      if (vPos > 0) {
        setVerticalShift(vPos * -1);
      } else {
        setVerticalShift(0);
      }

      if (targetElement?.getBoundingClientRect()?.top < 0) {
        setIsUpShown(true);
      } else {
        setIsUpShown(false);
      }
    };

    const throttledOnScroll = throttle(onScroll, SCROLL_THROTTLE_DELAY);

    addEventListener('scroll', throttledOnScroll);

    return () => removeEventListener('scroll', throttledOnScroll);
  }, [targetElement]);

  const onUpClick = () => {
    const heroRef = document.getElementById('hero');

    scroll({ top: heroRef.clientHeight - 60, behavior: 'smooth' });
  };

  return (
    <StyledButton
      type="button"
      tabIndex={-1}
      aria-hidden="true"
      isShown={isUpShown}
      verticalShift={verticalShift}
      onClick={onUpClick}
    >
      <SpriteIcon symbol="up" />
    </StyledButton>
  );
};

UpButton.propTypes = { targetElement: PropTypes.object };
