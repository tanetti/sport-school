import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { NewsArticle } from './components';
import { getNewsData } from './utilities';
import { Item, NoNews } from './NewsContainer.styled';

export const NewsContainer = ({ page, setPage }) => {
  const lastElementRef = useRef(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const lastElement = lastElementRef.current;

    const onLastItemIntersect = (entries, observer) => {
      const [entry] = entries;

      if (!entry.isIntersecting) return;

      setPage(prevState => prevState + 1);
      observer.unobserve(entry.target);
    };

    const observer = new IntersectionObserver(onLastItemIntersect);

    if (lastElement) observer.observe(lastElement);

    return () => {
      if (lastElement) observer.unobserve(lastElement);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastElementRef.current]);

  const newsData = getNewsData(searchParams.get('section'), page);

  if (!newsData?.length) {
    return <NoNews data-aos="fade-up">Новини відсутні</NoNews>;
  } else {
    return (
      <ul data-aos="fade-up">
        {newsData.map((data, index, array) => (
          <Item
            key={`${data?.name}-${data?.date}`}
            ref={index + 1 === array.length ? lastElementRef : null}
          >
            <NewsArticle data={data} />
          </Item>
        ))}
      </ul>
    );
  }
};

NewsContainer.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};
