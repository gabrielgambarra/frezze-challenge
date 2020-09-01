import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../shared/material/material.module';
import { RouterModule } from '@angular/router';
import { PublicRoutes } from 'src/app/public/public-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PublicComponent, LoginComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(PublicRoutes),
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PublicModule { }
