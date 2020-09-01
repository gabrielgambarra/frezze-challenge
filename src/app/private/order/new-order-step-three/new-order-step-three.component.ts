import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ClientAddress } from 'src/app/providers/models/Client.model';
import { NewOrderStepTwoComponent } from '../new-order-step-two/new-order-step-two.component';
import * as moment from 'moment';
import { DeliveryEddressFormComponent } from '../delivery-eddress-form/delivery-eddress-form.component';

@Component({
  selector: 'app-new-order-step-three',
  templateUrl: './new-order-step-three.component.html',
  styleUrls: ['./new-order-step-three.component.scss']
})
export class NewOrderStepThreeComponent implements OnInit {

  @ViewChild('clientAddressForm') clientAddressForm: DeliveryEddressFormComponent;
  @Input('step2') step2: NewOrderStepTwoComponent;
  deliveryEddress: ClientAddress = new ClientAddress();

  scheduled: boolean = false;
  scheduledDate: string = '';
  scheduledTime: string = '';

  startDate: Date = new Date();
  minDate: Date = new Date();

  tab: number;

  constructor() { }

  ngOnInit(): void {
    this.startDate.setDate(1);
  }

  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    this.tab = tabChangeEvent.index;
  }

  public onFilterDateChange(): void {
    this.scheduledDate = moment(this.startDate).format('YYYY-MM-DD');
  }

  public scheduleDelivery() {
    if (this.scheduled) {
      console.log("scheduled true")
      this.scheduledDate = moment(this.startDate).format('YYYY-MM-DD');
    } else {
      console.log("scheduled false")
      this.scheduledDate = '';
      this.scheduledTime = '';
    }
  }

}
