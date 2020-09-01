import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardRoutes } from './dashboard-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DetailsModalComponent } from './details-modal/details-modal.component';
import { NgxMaskModule } from 'ngx-mask';
import { NewStatusModalComponent } from './new-status-modal/new-status-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CancelOrderModalComponent } from './cancel-order-modal/cancel-order-modal.component';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  declarations: [WelcomeComponent, DetailsModalComponent, NewStatusModalComponent, CancelOrderModalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    NgxMaskModule.forRoot(),
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule
  ]
})
export class DashboardModule { }
