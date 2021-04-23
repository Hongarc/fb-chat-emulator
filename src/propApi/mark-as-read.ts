import Api, { Form, Id } from '../api';

export default function (this: Api, ...listId: Id[]): Promise<Form> {
  const ids: Form = {};
  listId.forEach((id: Id): void => {
    ids[id] = true;
  });

  return this.post('https://www.facebook.com/ajax/mercury/change_read_status.php', {
    shouldSendReadReceipt: true,
    ids,
  });
}
