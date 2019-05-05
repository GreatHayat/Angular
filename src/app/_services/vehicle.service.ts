import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { Observable, Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
}) 
export class VehicleService {
  vehicles: BehaviorSubject<any> = new BehaviorSubject<any>([
    { id: 10, nachname: 'Neon', vorname: 'Sodium', stadt: 'Sankt Vith' },
    { id: 11, nachname: 'Sodium', vorname: 'Neon', stadt: 'Sankt Vith' },
    { id: 12, nachname: 'Magnesium', vorname: 'Fluorine', stadt: 'Sankt Vith' },
    { id: 13, nachname: 'Aluminum', vorname: 'Oxygen', stadt: 'Sankt Vith' },
    { id: 14, nachname: 'Silicon', vorname: 'Nitrogen', stadt: 'Sankt Vith' },
    { id: 15, nachname: 'Phosphorus', vorname: 'Carbon', stadt: 'Sankt Vith' },
    { id: 16, nachname: 'Sulfur', vorname: 'Boron', stadt: 'Sankt Vith' },
    { id: 17, nachname: 'Chlorine', vorname: 'Beryllium', stadt: 'Sankt Vith' },
    { id: 18, nachname: 'Argon', vorname: 'Lithium', stadt: 'Sankt Vith' },
    { id: 19, nachname: 'Potassium', vorname: 'Helium', stadt: 'Sankt Vith' },
    { id: 20, nachname: 'Calcium', vorname: 'Hydrogen', stadt: 'Sankt Vith' },
  ]);
  public isUserLoggedIn
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private RequestService: RequestService) {
  }

  // getData() {
  //   return new Promise<any>((resolve, reject) => {
  //     this.RequestService.getData("test").then(rthis.RequestServicees => {
  //       resolve(res);
  //     });
  //   });
  // }

  getData(url): Observable<any> {
    return this.vehicles.asObservable();
  }

  deleteData(vehicleInfo): Observable<any> {
    // let temp = this.vehicles.value;

    //     let index = temp.findIndex(x => x.id == clientInfo.id);
    //     if (index > -1) {
    //       temp.splice(index, 1);
    //       this.vehicles.next(temp);
    //     }


    const res: BehaviorSubject<any> = new BehaviorSubject<any>(vehicleInfo);
    return res;
  }

  // deleteData(rows) {
  //   return new Promise<any>((resolve, reject) => {
  //     this.RequestService.deleteData("test",rows).then(res => {
  //       resolve(res);
  //     });
  //   });
  // }

  addData(data): Observable<any> {
    // let temp = this.vehicles.value;
    // temp.push(data);
    // this.vehicles.next(temp);
    const res: BehaviorSubject<any> = new BehaviorSubject<any>(data);
    return res;
  }

  // addData(data) {
  //   return new Promise<any>((resolve, reject) => {
  //     this.RequestService.addData("test",data).then(res => {
  //       resolve(res);
  //     });
  //   });
  // }

  updateData(obj): Observable<any> {
    // let temp = this.vehicles.value;
    // let index = temp.findIndex(x => x.id == obj.id);
    // if (index > -1) {
    //   temp[index] = obj;
    // }
    // this.vehicles.next(temp);
    const res: BehaviorSubject<any> = new BehaviorSubject<any>(obj);
    return res;
  }

  // updateData(obj){
  //   return new Promise<any>((resolve, reject) => {
  //     this.RequestService.updateData("test",obj).then(res => {
  //       resolve(res);
  //     });
  //   });
  // }
}


