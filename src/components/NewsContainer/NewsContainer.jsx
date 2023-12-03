import { useSearchParams } from 'react-router-dom';
import { NewsArticle } from './components';
import { getNewsData } from './utilities';
import { NoNews } from './NewsContainer.styled';

export const NewsContainer = () => {
  const [searchParams] = useSearchParams();

  const newsData = getNewsData(searchParams.get('section'));

  if (!newsData?.length) {
    return <NoNews data-aos="fade-up">Новини відсутні</NoNews>;
  } else {
    return (
      <div data-aos="fade-up">
        {newsData.map((data, index) => (
          <NewsArticle key={index} data={data} />
        ))}
      </div>
    );
  }
};
