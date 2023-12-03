import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SectionsTitle } from '@/components/shared';
import { NewsControls, NewsContainer } from '@/components';
import { SECTIONS } from '@/constants';
import { StyledNewsSection, UpButton } from './NewsSection.styled';
import { SpriteIcon } from '../shared';

const SECTIONS_NAMES = SECTIONS.map(({ name }) => name);

export const NewsSection = () => {
  const [isUpShown, setIsUpShown] = useState(false);
  const [verticalShift, setVerticalShift] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const titleRef = useRef(null);

  useEffect(() => {
    const footerRef = document.getElementById('footer');

    const onScroll = () => {
      const footerRect = footerRef?.getBoundingClientRect();
      const vPos = innerHeight - footerRect?.top - 25;

      if (vPos > 0) {
        setVerticalShift(vPos);
      } else {
        setVerticalShift(0);
      }

      if (titleRef?.current?.getBoundingClientRect()?.top < 0) {
        setIsUpShown(true);
      } else {
        setIsUpShown(false);
      }
    };

    addEventListener('scroll', onScroll);

    return () => removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (
      searchParams.size !== 1 ||
      ![...SECTIONS_NAMES, 'all'].includes(searchParams.get('section'))
    )
      setSearchParams({ section: 'all' });
  }, [searchParams, setSearchParams]);

  const onUpClick = () => {
    const heroRef = document.getElementById('hero');

    scroll({ top: heroRef.clientHeight - 60, behavior: 'smooth' });
  };

  return (
    <StyledNewsSection>
      <SectionsTitle ref={titleRef} data-aos="fade-up">
        Новини
      </SectionsTitle>

      <NewsControls />

      <NewsContainer />

      <UpButton
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        isShown={isUpShown}
        verticalShift={verticalShift}
        onClick={onUpClick}
      >
        <SpriteIcon symbol="up" />
      </UpButton>
    </StyledNewsSection>
  );
};
