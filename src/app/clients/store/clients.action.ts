import { Action } from '@ngrx/store';
import ActionWithPayload from '../../ActionWithPayload';
import {Client} from '@app/_models';

export const GET_CLIENT = '[Client] GET_CLIENT';
export const GET_CLIENT_SUCCESS = '[Client] GET_CLIENT_SUCCESS';
export const GET_CLIENT_ERROR = '[Client] GET_CLIENT_ERROR';

export const CREATE_CLIENT = '[Client] CREATE_CLIENT';
export const CREATE_CLIENT_SUCCESS = '[Client] CREATE_CLIENT_SUCCESS';
export const CREATE_CLIENT_ERROR = '[Client] CREATE_CLIENT_ERROR';

export const EDIT_CLIENT = '[Client] EDIT_CLIENT';
export const EDIT_CLIENT_SUCCESS = '[Client] EDIT_CLIENT_SUCCESS';
export const EDIT_CLIENT_ERROR = '[Client] EDIT_CLIENT_ERROR';

export const DELETE_CLIENT = '[Client] DELETE_CLIENT';
export const DELETE_CLIENT_SUCCESS = '[Client] DELETE_CLIENT_SUCCESS';
export const DELETE_CLIENT_ERROR = '[Client] DELETE_CLIENT_ERROR';

export class GetClient implements Action {
    readonly type = GET_CLIENT;

    constructor() { }
}

 

export class GetClientSuccess implements ActionWithPayload<Client[]> {
    readonly type = GET_CLIENT_SUCCESS;
    payload: Client[];

    constructor(payload: Client[]) {
        console.log('GetClient Success Action');
        this.payload = payload;
    }
}

export class CreateClient implements ActionWithPayload<Client> {
    readonly type = CREATE_CLIENT;
    payload: Client;

    constructor(payload: Client) {
        this.payload = payload;
    }
}

export class CreateClientSuccess implements ActionWithPayload<Client> {
    readonly type = CREATE_CLIENT_SUCCESS;
    payload: Client;

    constructor(payload: Client) {
        this.payload = payload;
    }
}

export class EditClient implements ActionWithPayload<Client> {
    readonly type = EDIT_CLIENT;
    payload: Client;

    constructor(payload: Client) {
        this.payload = payload;
    }
}

export class EditClientSuccess implements ActionWithPayload<Client> {
    readonly type = EDIT_CLIENT_SUCCESS;
    payload: Client;

    constructor(payload: Client) {
        this.payload = payload;
    }
}

export class DeleteClient implements ActionWithPayload<Client> {
    readonly type = DELETE_CLIENT;
    payload: Client;
 
    constructor(payload: Client) {
        this.payload = payload;
    }
}

export class DeleteClientSuccess implements ActionWithPayload<Client> {
    readonly type = DELETE_CLIENT_SUCCESS;
    payload: Client;

    constructor(payload: Client) {
        this.payload = payload;
    }
}


export class ClientError implements Action {
    readonly type: string;
    readonly message: string;

    constructor(type: string, message: string) {
        this.message = message;
        this.type = type;
    }
}


export type All = GetClient | CreateClient | GetClientSuccess | ClientError | CreateClientSuccess | EditClient | EditClientSuccess | DeleteClient | DeleteClientSuccess;