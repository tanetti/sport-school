import { SECTIONS } from '@/constants';

export const getMinMaxDate = sectionName => {
  const currentSection = SECTIONS.find(({ name }) => name === sectionName);

  if (!currentSection) return { minDate: null, maxDate: null };

  const { startAge, endAge } = currentSection;

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();

  const minDate = today.setFullYear(currentYear - endAge, currentMonth, 1);

  const maxDate = today.setFullYear(
    currentYear - startAge,
    currentMonth + 1,
    0
  );

  return { minDate, maxDate };
};
