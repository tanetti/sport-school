import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { NewsPhotos } from './components';
import { SECTIONS } from '@/constants';
import {
  Container,
  DataContainer,
  Date,
  Head,
  ImagesContainer,
  MainInfoContainer,
  StyledArticle,
  Title,
} from './NewsArticle.styled';

export const NewsArticle = ({ data }) => {
  const { name, date, filter, mainInfoMarkup, photoCount } = data;

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

        <DataContainer>
          <ImagesContainer aria-hidden="true">
            <NewsPhotos photoCount={photoCount} date={date} filter={filter} />
          </ImagesContainer>

          <MainInfoContainer>{parse(mainInfoMarkup)}</MainInfoContainer>
        </DataContainer>
      </StyledArticle>
    </Container>
  );
};

NewsArticle.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    filter: PropTypes.string.isRequired,
    mainInfoMarkup: PropTypes.string.isRequired,
    photoCount: PropTypes.number.isRequired,
  }).isRequired,
};
