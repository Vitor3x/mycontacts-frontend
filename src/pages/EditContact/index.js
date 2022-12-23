import Button from 'components/Button';
import Input from 'components/Input';
import { PageHeader } from 'components/PageHeader';
import Select from 'components/Select';

export function EditContact() {
  return (
    <>
      <PageHeader title="Editar Contato" />
      <Input type="text" placeholder="Nome" />
      <Select>
        <option value="123">Instagram</option>
        <option value="123">Instagram</option>
      </Select>
      <Button>Salvar alterações</Button>
      <Button disabled>Salvar alterações</Button>
    </>
  );
}
