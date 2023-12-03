import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SectionsTitle } from '@/components/shared';
import { NewsControls, NewsContainer } from '@/components';
import { SECTIONS } from '@/constants';
import { StyledNewsSection } from './NewsSection.styled';
import { UpButton } from './components';

const SECTIONS_NAMES = SECTIONS.map(({ name }) => name);

export const NewsSection = () => {
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const titleRef = useRef(null);

  useEffect(() => {
    if (
      searchParams.size !== 1 ||
      ![...SECTIONS_NAMES, 'all'].includes(searchParams.get('section'))
    )
      setSearchParams({ section: 'all' });
  }, [searchParams, setSearchParams]);

  return (
    <StyledNewsSection>
      <SectionsTitle ref={titleRef} data-aos="fade-up">
        Новини
      </SectionsTitle>

      <NewsControls setPage={setPage} />

      <NewsContainer page={page} setPage={setPage} />

      <UpButton targetElement={titleRef.current} />
    </StyledNewsSection>
  );
};
