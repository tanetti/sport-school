import PropTypes from 'prop-types';
import { useState } from 'react';
import parse from 'html-react-parser';
import { NewsPhotos } from './components';
import { SECTIONS } from '@/constants';
import {
  Container,
  Date,
  ExpandButton,
  Head,
  ImagesContainer,
  MainInfoContainer,
  StyledArticle,
  Title,
} from './NewsArticle.styled';

export const NewsArticle = ({ data }) => {
  const { name, date, filter, shortInfoMarkup, fullInfoMarkup, photoCount } =
    data;

  const [isExpanded, setIsExpanded] = useState(false);

  const sectionLabel = SECTIONS.find(({ name }) => name === filter)?.label;

  return (
    <Container data-aos="fade-up">
      <StyledArticle>
        <Head>
          <Title>{name}</Title>

          <Date>
            {sectionLabel ? `${sectionLabel} - ` : ''}

            <span>{date}</span>
          </Date>
        </Head>

        <MainInfoContainer>
          <ImagesContainer aria-hidden="true">
            <NewsPhotos photoCount={photoCount} date={date} filter={filter} />
          </ImagesContainer>

          {shortInfoMarkup ? (
            !isExpanded ? (
              <>
                {parse(shortInfoMarkup)}

                <ExpandButton type="button" onClick={() => setIsExpanded(true)}>
                  Читати далі...
                </ExpandButton>
              </>
            ) : (
              <>
                {parse(fullInfoMarkup)}

                <ExpandButton
                  type="button"
                  onClick={() => setIsExpanded(false)}
                >
                  Згорнути
                </ExpandButton>
              </>
            )
          ) : (
            parse(fullInfoMarkup)
          )}
        </MainInfoContainer>
      </StyledArticle>
    </Container>
  );
};

NewsArticle.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    filter: PropTypes.string.isRequired,
    shortInfoMarkup: PropTypes.string,
    fullInfoMarkup: PropTypes.string.isRequired,
    photoCount: PropTypes.number.isRequired,
  }).isRequired,
};
