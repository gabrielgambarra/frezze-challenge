import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';
import { NewOrderStepOneComponent } from './new-order-step-one/new-order-step-one.component';
import { NewOrderStepTwoComponent } from './new-order-step-two/new-order-step-two.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { NgxMaskModule } from 'ngx-mask';
import { RouterModule } from '@angular/router';
import { OrderRoutes } from './order-routing.module';
import { NewOrderStepThreeComponent } from './new-order-step-three/new-order-step-three.component';
import { DeliveryEddressFormComponent } from './delivery-eddress-form/delivery-eddress-form.component';

@NgModule({
  declarations: [NewOrderComponent, NewOrderStepTwoComponent, NewOrderStepOneComponent, NewOrderStepThreeComponent, DeliveryEddressFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    NgxMaskModule.forRoot(),
    RouterModule.forChild(OrderRoutes)
  ]
})
export class OrderModule { }
