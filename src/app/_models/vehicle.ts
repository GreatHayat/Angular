import {Data} from '@angular/router';

export class Vehicle {
    id: number;
    nachname: string;
    vorname: string;
    stadt: string;
}

export interface ICarLOg {

    id: Number;
    data: Data;
    milage: number;
    text: string;
}


export class IVehicle {
    vin: string;
    registration: string;
    derivative: string;
    make: string;
    model: string;
    modelYear: number;
    registrationDate: Date;
    manufactureDate: Date;
    odometer: number;
    color: string;
    paintCode: string;
    trim: string;
    fuel: string;
    doorPlan: string;
    gearbox: string;
    gearboxNo: string;
    co2Emission: string;
    engineNo: string;
    engineCode: string;
    engineSize: string;
    power: string;
    keyNo: string;
    radioNo: string;
    motDate: Date;
    serviceDate: Date;
    warrentyDate: Date;
    note: string;
    loge: ICarLOg[];
}




