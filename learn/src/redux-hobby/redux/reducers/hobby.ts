import { IHobby } from '../../components/Hobby';

const addHobby = 'addHobby';

export interface HobbyState {
  hobbies: IHobby[];
}

interface AddhobbyAction {
  type: typeof addHobby;
  payload: IHobby;
}

const initState: HobbyState = {
  hobbies: []
};

export function hobbyReducer(
  state = initState,
  action: AddhobbyAction
): HobbyState {
  switch (action.type) {
    case addHobby:
      return {
        ...state,
        hobbies: [...state.hobbies, action.payload]
      };
    default:
      return state;
  }
}
