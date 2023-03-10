import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3.5px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  background: #fff;
  border-radius: 4px;
  padding: 24px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  h1 {
    font-size: 22px;
    color: ${({ theme, danger }) => (danger ? theme.colors.danger.main : theme.colors.gray[900])};
  }

  p {
    margin-top: 8px;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 32px;

    .cancel-button {
      background: transparent;
      border: none;
      font-size: 16px;
      color: ${({ theme }) => theme.colors.gray[200]};
      margin-right: 8px;
    }
  }
`;
