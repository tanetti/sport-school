import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SectionsTitle } from '@/components/shared';
import { NewsControls, NewsContainer } from '@/components';
import { SECTIONS } from '@/constants';
import { StyledNewsSection } from './NewsSection.styled';

const SECTIONS_NAMES = SECTIONS.map(({ name }) => name);

export const NewsSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (
      searchParams.size !== 1 ||
      ![...SECTIONS_NAMES, 'all'].includes(searchParams.get('section'))
    )
      setSearchParams({ section: 'all' });
  }, [searchParams, setSearchParams]);

  return (
    <StyledNewsSection>
      <SectionsTitle data-aos="fade-up">Новини</SectionsTitle>

      <NewsControls />

      <NewsContainer />
    </StyledNewsSection>
  );
};
