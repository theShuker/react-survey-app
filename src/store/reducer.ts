import { IStoreState, storeActions } from "./Store";

type User =
  | {
      name: string;
    }
  | undefined;

export type UserActions =
  | {
      type: 'userLoggedIn';
      payload: User;
    }
  | {
      type: 'userLoggedOut';
    };


const userActions = {
  'userLoggedIn': (state: IStoreState, user: User) => ({...state, user}),
  'userLoggedOut': (state: IStoreState, user: User) => ({...state, user})
}

storeActions = {...storeActions, ...userActions}

export default userReducer;
