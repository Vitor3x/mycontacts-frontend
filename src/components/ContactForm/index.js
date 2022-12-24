import Input from 'components/Input';
import Button from 'components/Button';
import { FormGroup } from 'components/FormGroup';
import Select from 'components/Select';

import PropTypes from 'prop-types';
import { useState } from 'react';

import isEmailValid from 'utils/isEmailValid';
import * as S from './styles';

export const ContactForm = ({ buttonLabel }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [category, setCategory] = useState('');
  const [errors, setErrors] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setErrors((prevState) => [
        ...prevState,
        { field: 'name', message: 'Nome é obrigatório' },
      ]);
    } else {
      setErrors((prevState) => prevState.filter(
        (error) => error.field !== 'name',
      ));
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      const alreadyEmailExits = errors.find((erro) => erro.field === 'email');

      if (alreadyEmailExits) {
        return;
      }

      setErrors((prevState) => [
        ...prevState,
        { field: 'email', message: 'E-mail inválido' },
      ]);
    } else {
      setErrors((prevState) => [
        ...prevState,
        errors.filter((erro) => erro.field !== 'email'),
      ]);
    }
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          typex="text"
          placeholder="Nome"
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          typex="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          typex="number"
          placeholder="Telefone"
          value={telefone}
          onChange={({ target }) => setTelefone(target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={({ target }) => setCategory(target.value)}
        >
          <option value="123">Instagram</option>
          <option value="321">Twitter</option>
        </Select>
      </FormGroup>

      <S.ButtonContainer>
        <Button type="submit">{buttonLabel}</Button>
      </S.ButtonContainer>
    </S.Form>
  );
};

ContactForm.propTypes = {
  buttonLabel: PropTypes.node.isRequired,
};
