import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  clients;
  constructor() {
    this.clients = [
      { id: 1, nachname: 'Hydrogen', vorname: 'Calcium', stadt: 'Sankt Vith' },
      { id: 2, nachname: 'Helium', vorname: 'Potassium', stadt: 'Sankt Vith' },
      { id: 3, nachname: 'Lithium', vorname: 'Argon', stadt: 'Sankt Vith' },
      { id: 4, nachname: 'Beryllium', vorname: 'Chlorine', stadt: 'Sankt Vith' },
      { id: 5, nachname: 'Boron', vorname: 'Sulfur', stadt: 'Sankt Vith' },
      { id: 6, nachname: 'Carbon', vorname: 'Phosphorus', stadt: 'Sankt Vith' },
      { id: 7, nachname: 'Nitrogen', vorname: 'Silicon', stadt: 'Sankt Vith' },
      { id: 8, nachname: 'Oxygen', vorname: 'Aluminum', stadt: 'Sankt Vith' },
      { id: 9, nachname: 'Fluorine', vorname: 'Magnesium', stadt: 'Sankt Vith' },
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
    ];
  }

  getData(url) {
    return new Promise<any>((resolve, reject) => {
      resolve(this.clients)
    });
  }

  addData(url, obj) {
    return new Promise<any>((resolve, reject) => {
      this.clients.push(obj);
      resolve(this.clients)
    });
  }

  updateData(url, obj) {
    return new Promise<any>((resolve, reject) => {
      const index = this.clients.findIndex(x => x.id === obj.id);
      if (index > -1) {
        this.clients[index] = obj;
      }
      resolve(this.clients)
    });
  }

  deleteData(url, row) {
    return new Promise<any>((resolve, reject) => {
      if (row && row.length > 0) {
        row.forEach(clientInfo => {
          const index = this.clients.findIndex(x => x.id === clientInfo.id);
          if (index > -1) {
            this.clients.splice(index, 1);
          }
        });
      }
      resolve(this.clients)
    });
  }

}

