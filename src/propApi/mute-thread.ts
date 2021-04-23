import Api, { Form, Id } from '../api';

export default function (this: Api, threadId: Id, second: number): Promise<Form> {
  return this.post('https://www.facebook.com/ajax/mercury/change_mute_thread.php', {
    thread_fbid: threadId,
    mute_settings: second,
  });
}
