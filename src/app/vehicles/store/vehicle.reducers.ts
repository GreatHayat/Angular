import ActionWithPayload from '../../ActionWithPayload';
import {Vehicle} from '@app/_models/vehicle';
import {VehicleState, initializeState } from './vehicle.state';
import * as VehicleActions from './vehicle.action';
import { Action } from '@ngrx/store';

const initialState = initializeState();
 
export function VehicleReducer(state: VehicleState = initialState,
  action: Action) {

  switch (action.type) {
    case VehicleActions.GET_VEHICLE:
      return { ...state, Loaded: false, Loading: false, message: null };

    case VehicleActions.CREATE_VEHICLE:
      return ({
        ...state,
        Loading: true, Loaded: false, message: null
      });

    case VehicleActions.EDIT_VEHICLE:
      return ({
        ...state,
        Loading: true, Loaded: false, message: null
      });

    case VehicleActions.DELETE_VEHICLE:
      return ({
        ...state,
        Loading: true, Loaded: false, message: null
      });

    case VehicleActions.GET_VEHICLE_SUCCESS:
      console.log('Get Vehicle Success Reducer', (action as ActionWithPayload<Vehicle[]>).payload);
      return ({
        ...state,
        VehicleList: (action as ActionWithPayload<Vehicle[]>).payload,
        Loading: false, Loaded: true, message: null
      });

    case VehicleActions.CREATE_VEHICLE_SUCCESS:
      console.log('Add Reducer', (action as ActionWithPayload<Vehicle>).payload);
      return ({
        ...state,
        VehicleList: [...state.VehicleList, (action as ActionWithPayload<Vehicle>).payload],
        Loading: false, Loaded: true, message: 'Data added successfully'
      });

    case VehicleActions.EDIT_VEHICLE_SUCCESS:
      const newState = [...state.VehicleList]; // clone the array
      const ind = newState.findIndex(x => x.id === (action as ActionWithPayload<Vehicle>).payload.id);
      newState[ind] = (action as ActionWithPayload<Vehicle>).payload;

      return ({
        ...state,
        VehicleList: newState,
        Loading: false, Loaded: true, message: 'Data edited successfully'
      });

    case VehicleActions.DELETE_VEHICLE_SUCCESS:
      return ({
        ...state,
        VehicleList: state.VehicleList.filter(Vehicle => {
          return Vehicle.id !== (action as ActionWithPayload<Vehicle>).payload.id;
        }),
        Loading: false, Loaded: true, message: 'Data daleted successfully'
      });

    case VehicleActions.GET_VEHICLE_ERROR:
      return ({
        ...state,
        Loading: false, Loaded: false, message: 'Operation error'
      });

    default:
      return state;
  }
}
