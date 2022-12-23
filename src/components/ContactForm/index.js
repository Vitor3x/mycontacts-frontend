import Input from 'components/Input';
import Button from 'components/Button';
import { FormGroup } from 'components/FormGroup';
import PropTypes from 'prop-types';
import Select from 'components/Select';
import * as S from './styles';

export const ContactForm = ({ buttonLabel }) => (
  <S.Form>
    <FormGroup>
      <Input typex="text" placeholder="Nome" />
    </FormGroup>

    <FormGroup>
      <Input typex="email" placeholder="Email" />
    </FormGroup>

    <FormGroup>
      <Input typex="number" placeholder="Telefone" />
    </FormGroup>

    <FormGroup>
      <Select>
        <option value="123">Instagram</option>
        <option value="321">Twitter</option>
      </Select>
    </FormGroup>

    <S.ButtonContainer>
      <Button type="submit">{buttonLabel}</Button>
    </S.ButtonContainer>
  </S.Form>
);

ContactForm.propTypes = {
  buttonLabel: PropTypes.node.isRequired,
};
