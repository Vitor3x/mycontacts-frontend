import PropTypes from 'prop-types';
import * as S from './styles';

export const FormGroup = ({ children }) => (
  <S.Container>
    {children}
  </S.Container>
);

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
};
