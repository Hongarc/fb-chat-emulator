import Api, { Form, Id } from '../api';

export default function (this: Api, messageId: Id[]): Form {
  return this.post('https://www.facebook.com/messaging/unsend_message/', {
    message_id: messageId,
  });
}
