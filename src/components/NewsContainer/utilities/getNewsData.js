import { newsDB } from '@/db/news';

const ITEMS_PER_PAGE = 4;

export const getNewsData = (sectionFilter, page) => {
  if ((!sectionFilter || sectionFilter === 'all') && !page) return newsDB;

  const resultLength = ITEMS_PER_PAGE * page;

  if (!sectionFilter || sectionFilter === 'all') {
    const allNews = [...newsDB];

    allNews.length = Math.min(resultLength, allNews.length);

    return allNews;
  }

  const filteredNews = newsDB.filter(
    ({ filter }) => filter === sectionFilter || filter.includes(sectionFilter)
  );

  filteredNews.length = Math.min(resultLength, filteredNews.length);

  return filteredNews;
};
