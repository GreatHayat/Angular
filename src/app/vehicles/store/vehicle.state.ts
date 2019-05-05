import {Vehicle} from '@app/_models/vehicle';

export interface VehicleState {
    Loading: boolean;
    Loaded: boolean;
    VehicleList: Vehicle[];
    message: string
}

export const initializeState = (): VehicleState => {
    return ({
        VehicleList: [],
        Loading: false,
        Loaded: true,
        message: null
    });
}
