export class Client {
    id: number;
    clientContacts: ClientContacts;
    clientAddress: ClientAddress;
    fullName: string = "";
    identityId: string = "";
    registeredIn: string = "";
    updatedIn: string = "";

    constructor() {
        this.clientContacts = new ClientContacts();
        this.clientAddress = new ClientAddress();
    }
}

export class ClientAddress {
    streetAddress: string = "";
    number: string = "";
    complement: string = "";
    neighborhood: string = "";
    city: string = "";
    state: string = "";
    zipCode: string = "";
}

export class ClientContacts {
    email: string = "";
    phone: string = "";
}