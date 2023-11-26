import { SECTIONS } from '@/constants';

export const getDefaultSectionValue = pathname => {
  if (!pathname) return null;

  const pageRoot = pathname.split('/')[1];

  const currentSection = SECTIONS.find(({ name }) => name === pageRoot);
  const currentSectionName = currentSection?.name;
  const isCurrentSectionDisabled = currentSection?.disabled;

  if (!currentSectionName || isCurrentSectionDisabled) return null;

  return currentSectionName;
};
