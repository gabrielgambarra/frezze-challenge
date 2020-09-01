import { Client, ClientAddress } from './Client.model';
import { Pizza } from './Pizza.model';

export class Order {
    id: number;
    client: Client;
    pizzas: Pizza[] = [];
    status: StatusType;
    deliveryAddress: ClientAddress;
    scheduled: boolean;
    scheduledDate: string;
    scheduledTime: string;

    constructor() {
        this.client = new Client();
        this.deliveryAddress = new ClientAddress();
    }
}

export class OrderHistory {
    id: number;
    pizzaOrder: PizzaOrder;
    status: StatusType;
    submittedAddress: ClientAddress;
    scheduled: boolean;
    scheduledDate: string;
    scheduledTime: string;
    registeredIn: string;

    constructor() {
        this.pizzaOrder = new PizzaOrder();
        this.submittedAddress = new ClientAddress();
    }
}

export class PizzaOrder {
    id: number;
    client: Client;
    pizzas: Pizza[] = [];
    deliveryAddress: ClientAddress;
    status: StatusType;
    scheduled: boolean;
    scheduledDate: string;
    scheduledTime: string;

    constructor() {
        this.client = new Client();
        this.deliveryAddress = new ClientAddress();
    }
}

export enum StatusType {
    ABERTO = 'ABERTO',
    CONTATAR_CLIENTE = 'CONTATAR_CLIENTE',
    PREPARANDO = 'PREPARANDO',
    SAIU_PARA_ENTREGA = 'SAIU_PARA_ENTREGA',
    CANCELADO = 'CANCELADO',
    ENTREGUE = 'ENTREGUE',
    FINALIZADO = 'FINALIZADO'
}

export const Status = [
    { value: StatusType.ABERTO, view: 'Aberto' },
    { value: StatusType.CONTATAR_CLIENTE, view: 'Contatar cliente' },
    { value: StatusType.PREPARANDO, view: 'Preparando' },
    { value: StatusType.SAIU_PARA_ENTREGA, view: 'Saiu para entrega' },
    { value: StatusType.ENTREGUE, view: 'Entregue' },
    { value: StatusType.CANCELADO, view: 'Cancelado' },
    { value: StatusType.FINALIZADO, view: 'Finalizado' }
]
