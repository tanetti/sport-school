import { newsDB } from '@/db/news';
import { NEWS_ITEMS_PER_PAGE } from '@/constants';

export const getNewsData = (sectionFilter, page) => {
  if ((!sectionFilter || sectionFilter === 'all') && !page) return newsDB;

  const resultLength = NEWS_ITEMS_PER_PAGE * page;

  if (!sectionFilter || sectionFilter === 'all') {
    return newsDB.slice(0, Math.min(resultLength, newsDB.length));
  }

  const filteredNews = newsDB.filter(
    ({ filter }) => filter === sectionFilter || filter.includes(sectionFilter)
  );

  return filteredNews.slice(0, Math.min(resultLength, filteredNews.length));
};
