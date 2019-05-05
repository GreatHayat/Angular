import {Action} from '@ngrx/store/src';


export default interface ActionWithPayload<T> extends Action {
    // payload: T;
    type: string;
    payload: T;
}
 