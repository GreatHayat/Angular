import ActionWithPayload from '../../ActionWithPayload';
import { Client } from '../../_models';
import { ClientState, initializeState } from './clients.state';
import * as ClientActions from './clients.action';
import { Action } from '@ngrx/store';

const initialState = initializeState();
 
export function ClientReducer(state: ClientState = initialState, action: Action) {

  switch (action.type) {
    case ClientActions.GET_CLIENT:
      return { ...state, Loaded: false, Loading: false, message: null };

    case ClientActions.CREATE_CLIENT:
      return ({
        ...state,
        Loading: true, Loaded: false, message: null
      });

    case ClientActions.EDIT_CLIENT:
      return ({
        ...state,
        Loading: true, Loaded: false, message: null
      });

    case ClientActions.DELETE_CLIENT:
      return ({
        ...state,
        Loading: true, Loaded: false, message: null
      });

    case ClientActions.GET_CLIENT_SUCCESS:
      console.log('Get Client Success Reducer', (action as ActionWithPayload<Client[]>).payload);
      return ({
        ...state,
        ClientList: (action as ActionWithPayload<Client[]>).payload,
        Loading: false, Loaded: true, message: null
      });

    case ClientActions.CREATE_CLIENT_SUCCESS:
      console.log('Add Reducer', (action as ActionWithPayload<Client>).payload);
      return ({
        ...state,
        ClientList: [...state.ClientList, (action as ActionWithPayload<Client>).payload],
        Loading: false, Loaded: true, message: 'Data added successfully'
      });

    case ClientActions.EDIT_CLIENT_SUCCESS:
      const newState = [...state.ClientList]; // clone the array
      const ind = newState.findIndex(x => x.id === (action as ActionWithPayload<Client>).payload.id);
      newState[ind] = (action as ActionWithPayload<Client>).payload;

      return ({
        ...state,
        ClientList: newState,
        Loading: false, Loaded: true, message: 'Data edited successfully'
      });

    case ClientActions.DELETE_CLIENT_SUCCESS:
      return ({
        ...state,
        ClientList: state.ClientList.filter(client => {
          return client.id !== (action as ActionWithPayload<Client>).payload.id;
        }),
        Loading: false, Loaded: true, message: 'Data daleted successfully'
      });

    case ClientActions.GET_CLIENT_ERROR:
      return ({
        ...state,
        Loading: false, Loaded: false, message: 'Operation error'
      });

    default:
      return state;
  }
}
