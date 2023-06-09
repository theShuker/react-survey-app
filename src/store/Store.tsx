import { createContext, Dispatch, useReducer, useContext } from 'react';
import { UserActions } from './reducer';

export interface IStoreState {
  user?: User;
}

interface IStoreContext {
  state: IStoreState;
  dispatch: Dispatch<any>;
}

const initialState: IStoreState = {};

export const Store = createContext<IStoreContext>({
  state: initialState,
  dispatch: () => null,
});

export const useStore = useContext(Store);

export type Actions = UserActions;

export const storeActions = {};


const reducer = (state: IStoreState, action: Actions) => {
  switch (action.type) {
    case 'userLoggedIn':
      return {...state, user: action.payload};
      break;

    case 'userLoggedOut':
      return {...state, user: null};
      break;

    default:
      return state;
      break;
  }
};

interface IStoreProviderProps {
  children: React.ReactNode;
}

export const StoreProvider = ({ children }: IStoreProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
};
