import Button from 'components/Button';
import * as S from './styles';

export const Modal = () => (
  <S.Overlay>
    <S.Container>
      <h1>Titulo do Modal</h1>
      <p>Esta ação não poderá ser desfeita!</p>

      <footer>
        <button type="button" className="cancel-button">Cancelar</button>
        <Button type="button">Deletar</Button>
      </footer>
    </S.Container>
  </S.Overlay>
);
