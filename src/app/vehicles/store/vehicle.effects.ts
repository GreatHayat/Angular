import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';

import { catchError, map, mergeMap } from 'rxjs/operators';

import {Vehicle} from '@app/_models';
import {VehicleService} from '@app/_services';

import {
  CreateVehicle,
  CreateVehicleSuccess,
  CREATE_VEHICLE,
  CREATE_VEHICLE_ERROR,
  EditVehicle,
  EditVehicleSuccess,
  EDIT_VEHICLE,
  EDIT_VEHICLE_ERROR,
  DeleteVehicle,
  DeleteVehicleSuccess,
  DELETE_VEHICLE,
  DELETE_VEHICLE_ERROR,
  GetVehicle,
  GetVehicleSuccess,
  GET_VEHICLE,
  GET_VEHICLE_ERROR,
  GET_VEHICLE_SUCCESS,
  VehicleError
} from './vehicle.action';

@Injectable()
export class VehicleEffects {
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private action$: Actions, private VehicleService: VehicleService) {}
//   private ApiURL: string = 'https://localhost:44360/api/Vehicle';

  @Effect()
  GetVehicles$     = this.action$.pipe(
    ofType<GetVehicle>(GET_VEHICLE),
    mergeMap(action =>
        this.VehicleService.getData('get').pipe(
        map(data => {
          console.log('Effects Http call: ', data);
          return new GetVehicleSuccess(data as Vehicle[]);
        }),
        catchError(error => {
          console.error('Http Call Error: ', error);
          return of(new VehicleError(GET_VEHICLE_ERROR, error.message));
        })
      )
    )
  );

  @Effect()
  CreateVehicles$  = this.action$
    .pipe(
        ofType<CreateVehicle>(CREATE_VEHICLE),
      mergeMap(action => this.VehicleService.addData(JSON.stringify(action.payload))
          .pipe(
            map(data => {
              console.log('Effects Post Http call success: ', data);
              return new CreateVehicleSuccess(action.payload as Vehicle);
            }),
            catchError(error => {
              console.error('Http Call Error: ', error);
              return of(new VehicleError(GET_VEHICLE_ERROR, error.message));
            })
          )
      )
    );

    @Effect()
  EditVehicles$  = this.action$
    .pipe(
        ofType<EditVehicle>(EDIT_VEHICLE),
      mergeMap(action => this.VehicleService.updateData(JSON.stringify(action.payload))
          .pipe(
            map(data => {
              console.log('Effects Put Http call success: ', data);
              return new EditVehicleSuccess(action.payload as Vehicle);
            }),
            catchError(error => {
              console.error('Http Call Error: ', error);
              return of(new VehicleError(GET_VEHICLE_ERROR, error.message));
            })
          )
      )
    );

    @Effect()
  DeleteVehicles$  = this.action$
    .pipe(
        ofType<DeleteVehicle>(DELETE_VEHICLE),
      mergeMap(action => this.VehicleService.deleteData(JSON.stringify(action.payload))
          .pipe(
            map(data => {
              console.log('Effects Delete Http call success: ', data);
              return new DeleteVehicleSuccess(action.payload as Vehicle);
            }),
            catchError(error => {
              console.error('Http Call Error: ', error);
              return of(new VehicleError(GET_VEHICLE_ERROR, error.message));
            })
          )
      )
    );
}
