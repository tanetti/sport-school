import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { NewsArticle } from './components';
import { getNewsData } from './utilities';
import { Item, NoNews } from './NewsContainer.styled';

export const NewsContainer = ({ page, setPage }) => {
  const [lastElement, setLastElement] = useState(null);
  const [searchParams] = useSearchParams();

  const observerRef = useRef(
    new IntersectionObserver((entries, observer) => {
      const [entry] = entries;

      if (!entry.isIntersecting) return;

      setPage(prevState => prevState + 1);
      observer.unobserve(entry.target);
    })
  );

  useEffect(() => {
    const currentObserver = observerRef.current;

    if (lastElement) {
      currentObserver.observe(lastElement);
    }

    return () => {
      if (lastElement) {
        currentObserver.unobserve(lastElement);
      }
    };
  }, [lastElement]);

  const newsData = getNewsData(searchParams.get('section'), page);

  if (!newsData?.length) {
    return <NoNews data-aos="fade-up">Новини відсутні</NoNews>;
  } else {
    return (
      <ul data-aos="fade-up">
        {newsData.map((data, index, array) => (
          <Item
            key={`${data?.name}-${data?.date}`}
            ref={index + 1 === array.length ? setLastElement : null}
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
