import Button from 'components/Button';
import PropTypes from 'prop-types';
import * as S from './styles';

export const Modal = ({ danger }) => (
  <S.Overlay>
    <S.Container danger={danger}>
      <h1>Titulo do Modal</h1>
      <p>Esta ação não poderá ser desfeita!</p>

      <footer>
        <button type="button" className="cancel-button">Cancelar</button>
        <Button type="button" danger={danger}>Deletar</Button>
      </footer>
    </S.Container>
  </S.Overlay>
);

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
