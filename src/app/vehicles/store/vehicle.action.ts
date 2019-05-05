import { Action } from '@ngrx/store';
import ActionWithPayload from '../../ActionWithPayload';
import {Vehicle} from '@app/_models/vehicle';

export const GET_VEHICLE = '[Vehicle] GET_VEHICLE';
export const GET_VEHICLE_SUCCESS = '[Vehicle] GET_VEHICLE_SUCCESS';
export const GET_VEHICLE_ERROR = '[Vehicle] GET_VEHICLE_ERROR';

export const CREATE_VEHICLE = '[Vehicle] CREATE_VEHICLE';
export const CREATE_VEHICLE_SUCCESS = '[Vehicle] CREATE_VEHICLE_SUCCESS';
export const CREATE_VEHICLE_ERROR = '[Vehicle] CREATE_VEHICLE_ERROR';

export const EDIT_VEHICLE = '[Vehicle] EDIT_VEHICLE';
export const EDIT_VEHICLE_SUCCESS = '[Vehicle] EDIT_VEHICLE_SUCCESS';
export const EDIT_VEHICLE_ERROR = '[Vehicle] EDIT_VEHICLE_ERROR';

export const DELETE_VEHICLE = '[Vehicle] DELETE_VEHICLE';
export const DELETE_VEHICLE_SUCCESS = '[Vehicle] DELETE_VEHICLE_SUCCESS';
export const DELETE_VEHICLE_ERROR = '[Vehicle] DELETE_VEHICLE_ERROR';

export class GetVehicle implements Action {
    readonly type = GET_VEHICLE;

    constructor() { }
}

 

export class GetVehicleSuccess implements ActionWithPayload<Vehicle[]> {
    readonly type = GET_VEHICLE_SUCCESS;
    payload: Vehicle[];

    constructor(payload: Vehicle[]) {
        console.log('GetVehicle Success Action');
        this.payload = payload;
    }
}

export class CreateVehicle implements ActionWithPayload<Vehicle> {
    readonly type = CREATE_VEHICLE;
    payload: Vehicle;

    constructor(payload: Vehicle) {
        this.payload = payload;
    }
}

export class CreateVehicleSuccess implements ActionWithPayload<Vehicle> {
    readonly type = CREATE_VEHICLE_SUCCESS;
    payload: Vehicle;

    constructor(payload: Vehicle) {
        this.payload = payload;
    }
}

export class EditVehicle implements ActionWithPayload<Vehicle> {
    readonly type = EDIT_VEHICLE;
    payload: Vehicle;

    constructor(payload: Vehicle) {
        this.payload = payload;
    }
}

export class EditVehicleSuccess implements ActionWithPayload<Vehicle> {
    readonly type = EDIT_VEHICLE_SUCCESS;
    payload: Vehicle;

    constructor(payload: Vehicle) {
        this.payload = payload;
    }
}

export class DeleteVehicle implements ActionWithPayload<Vehicle> {
    readonly type = DELETE_VEHICLE;
    payload: Vehicle;

    constructor(payload: Vehicle) {
        this.payload = payload;
    }
}

export class DeleteVehicleSuccess implements ActionWithPayload<Vehicle> {
    readonly type = DELETE_VEHICLE_SUCCESS;
    payload: Vehicle;

    constructor(payload: Vehicle) {
        this.payload = payload;
    }
}


export class VehicleError implements Action {
    readonly type: string;
    readonly message: string;

    constructor(type: string, message: string) {
        this.message = message;
        this.type = type;
    }
}


export type All = GetVehicle | CreateVehicle | GetVehicleSuccess | VehicleError | CreateVehicleSuccess | EditVehicle | EditVehicleSuccess | DeleteVehicle | DeleteVehicleSuccess;
