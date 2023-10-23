import { IHobby } from '../../components/Hobby';

const addHobby = 'addHobby';

interface AddhobbyAction {
  type: typeof addHobby;
  payload: IHobby;
}

export function addHobbyAction(payload: IHobby): AddhobbyAction {
  return {
    type: 'addHobby',
    payload
  };
}
