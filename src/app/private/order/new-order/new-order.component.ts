import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/providers/models/Client.model';
import { OrderService } from 'src/app/providers/services/order.service';
import { Order } from '../../../providers/models/OrderRequest.model';
import { NewOrderStepOneComponent } from '../new-order-step-one/new-order-step-one.component';
import { NewOrderStepThreeComponent } from '../new-order-step-three/new-order-step-three.component';
import { NewOrderStepTwoComponent } from '../new-order-step-two/new-order-step-two.component';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {

  @ViewChild('step1') step1: NewOrderStepOneComponent;
  @ViewChild('step2') step2: NewOrderStepTwoComponent;
  @ViewChild('step3') step3: NewOrderStepThreeComponent;

  requestOrder: Order = new Order();
  clientCopy = new Client();
  clientAlreadyExists: boolean;

  constructor(
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public submitOrder() {

    this.requestOrder.client = this.step2.client;

    this.requestOrder.pizzas = this.step1.pizzasToOrder;
    this.requestOrder.deliveryAddress = this.step3.clientAddressForm.deliveryEddress;

    this.requestOrder.scheduled = this.step3.scheduled;

    if (this.requestOrder.scheduled) {
      this.requestOrder.scheduledDate = this.step3.scheduledDate;
      this.requestOrder.scheduledTime = this.step3.scheduledTime;
    }

    this.orderService.createNewOrder(this.requestOrder).subscribe(
      success => {
        this.router.navigate(['/home']);
      }
    );
  }

}
