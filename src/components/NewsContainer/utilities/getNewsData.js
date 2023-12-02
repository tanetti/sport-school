import { newsDB } from '@/db/news';

export const getNewsData = sectionFilter => {
  if (!sectionFilter || sectionFilter === 'all') return newsDB;

  return newsDB.filter(
    ({ filter }) => filter === sectionFilter || filter.includes(sectionFilter)
  );
};
