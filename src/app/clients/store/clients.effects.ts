import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';

import { catchError, map, mergeMap } from 'rxjs/operators';
import {Client} from '@app/_models';
import {ClientService} from '@app/_services';
 
import {
  CreateClient,
  CreateClientSuccess,
  CREATE_CLIENT,
  CREATE_CLIENT_ERROR,
  EditClient,
  EditClientSuccess,
  EDIT_CLIENT,
  EDIT_CLIENT_ERROR,
  DeleteClient,
  DeleteClientSuccess,
  DELETE_CLIENT,
  DELETE_CLIENT_ERROR,
  GetClient,
  GetClientSuccess,
  GET_CLIENT,
  GET_CLIENT_ERROR,
  GET_CLIENT_SUCCESS,
  ClientError
} from './clients.action';

@Injectable()
export class ClientEffects {
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private action$: Actions, private ClientService: ClientService) {}
//   private ApiURL: string = 'https://localhost:44360/api/Client';

  @Effect()
  GetClients$     = this.action$.pipe(
    ofType<GetClient>(GET_CLIENT),
    mergeMap(action =>
        this.ClientService.getData('get').pipe(
        map(data => {
          console.log('Client Effects Http call: ', data);
          return new GetClientSuccess(data as Client[]);
        }),
        catchError(error => {
          console.error('Client  Http Call Error: ', error);
          return of(new ClientError(GET_CLIENT_ERROR, error.message));
        })
      )
    )
  );

  @Effect()
  CreateClients$  = this.action$
    .pipe(
        ofType<CreateClient>(CREATE_CLIENT),
      mergeMap(action => this.ClientService.addData(JSON.stringify(action.payload))
          .pipe(
            map(data => {
              console.log('Effects Post Http call success: ', data);
              return new CreateClientSuccess(action.payload as Client);
            }),
            catchError(error => {
              console.error('Http Call Error: ', error);
              return of(new ClientError(GET_CLIENT_ERROR, error.message));
            })
          )
      )
    );

    @Effect()
  EditClients$  = this.action$
    .pipe(
        ofType<EditClient>(EDIT_CLIENT),
      mergeMap(action => this.ClientService.updateData(JSON.stringify(action.payload))
          .pipe(
            map(data => {
              console.log('Effects Put Http call success: ', data);
              return new EditClientSuccess(action.payload as Client);
            }),
            catchError(error => {
              console.error('Http Call Error: ', error);
              return of(new ClientError(GET_CLIENT_ERROR, error.message));
            })
          )
      )
    );

    @Effect()
  DeleteClients$  = this.action$
    .pipe(
        ofType<DeleteClient>(DELETE_CLIENT),
      mergeMap(action => this.ClientService.deleteData(JSON.stringify(action.payload))
          .pipe(
            map(data => {
              console.log('Effects Delete Http call success: ', data);
              return new DeleteClientSuccess(action.payload as Client);
            }),
            catchError(error => {
              console.error('Http Call Error: ', error);
              return of(new ClientError(GET_CLIENT_ERROR, error.message));
            })
          )
      )
    );
}
