import { Link } from 'react-router-dom';
import arrow from 'assets/images/icons/arrow.svg';
import PropTypes from 'prop-types';
import * as S from './styles';

export function PageHeader({ title }) {
  return (
    <S.Container>
      <Link to="/">
        <img src={arrow} alt="Arrow" />
        <span>Voltar</span>
      </Link>
      <h1>{title}</h1>
    </S.Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
