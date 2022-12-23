import arrow from 'assets/images/icons/arrow.svg';
import edit from 'assets/images/icons/edit.svg';
import trash from 'assets/images/icons/trash.svg';
import { Modal } from 'components/Modal';
import { Link } from 'react-router-dom';

import * as S from './styles';

export function Home() {
  return (
    <S.Container>
      <Modal danger />
      <S.InputSearcherContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </S.InputSearcherContainer>
      <S.Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </S.Header>
      <S.ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>
        <S.Card>
          <div className="info">
            <div className="contact-name">
              <strong>Joao Vitor</strong>
              <small>Instagram</small>
            </div>
            <span>joaovitor@academy.com.br</span>
            <span>(41) 99999-9999</span>
          </div>
          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="Edit contact" />
            </Link>
            <button type="button">
              <img src={trash} alt="Delete contact" />
            </button>
          </div>
        </S.Card>

      </S.ListContainer>
    </S.Container>
  );
}
