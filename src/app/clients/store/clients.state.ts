import {Client} from '../../_models';
 
export interface ClientState {
    Loading: boolean;
    Loaded: boolean;
    ClientList: Client[];
    message: string
}

export const initializeState = (): ClientState => {
    return ({
        ClientList: [],
        Loading: false,
        Loaded: true,
        message: null
    });
}
