import Input from 'components/Input';
import { PageHeader } from 'components/PageHeader';

export function EditContact() {
  return (
    <>
      <PageHeader title="Editar Contato" />
      <Input type="text" placeholder="Nome" />

    </>
  );
}
