import { SECTIONS } from '@/constants';

export const getDefaultSectionValue = defaultSection => {
  if (!defaultSection) return null;

  const currentSection = SECTIONS.find(({ name }) => name === defaultSection);

  if (!currentSection || currentSection?.disabled) return null;

  return defaultSection;
};
