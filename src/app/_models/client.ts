export class Client {
  id: number;
  nachname: string;
  vorname: string;
  stadt: string;
} 
export class Contact {
  id: number;
  type: string;
  title: string;
  firstname: string;
  lastname: string;
  name: string;
  address: Address;
  billingAddress: Address;
  communications: Communications[];
  vat?: string;
}

export class Address {
  id: number;
  clientId: number;
  line1: string;
  line2?: string;
  postcode: number;
  country: string;
}

export class Communications {
  id: number;
  clientId: number;
  type: string;
  value: string;
}
