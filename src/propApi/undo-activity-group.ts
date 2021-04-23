import Api, { Form, Id } from '../api';

export default function (this: Api, groupId: Id, activityId: Id): Promise<Form> {
  return this.post(`https://www.facebook.com/groups/${groupId}/write_async/activity_undo/`, {
    activity_id: activityId,
  });
}
