import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from '../../../providers/models/Client.model';
import { ClientService } from '../../../providers/services/client.service';

@Component({
  selector: 'app-new-order-step-two',
  templateUrl: './new-order-step-two.component.html',
  styleUrls: ['./new-order-step-two.component.scss']
})
export class NewOrderStepTwoComponent implements OnInit {

  @ViewChild('clientForm') clientForm: NgForm;

  client: Client = new Client();
  cellMask: string = '(00) 0000-00009';

  constructor(
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
  }

  public getEddressByZipCode(zipCode: string) {
    if (zipCode.length == 8) {
      this.clientService.getClientEddressByZipCode(this.client.clientAddress.zipCode).subscribe(
        success => {
          this.client.clientAddress.streetAddress = success.logradouro;
          this.client.clientAddress.neighborhood = success.bairro;
          this.client.clientAddress.city = success.localidade;
          this.client.clientAddress.state = success.uf;
        }
      );
    }
  }

  apllyCellMask(val: string) {
    if (val) {
      setTimeout(() => {
        this.cellMask = val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
      }, 0);
    } else {
      this.cellMask = '(00) 0000-00009';
    }
  }

  public vefifyIfClientAlreadyExists(identityId) {
    if (identityId.length == 14 && identityId != undefined) {
      this.clientService.checkIfClientExists(identityId).subscribe(
        success => {
          if (!success.data.empty) {
            this.client = success.data.content[0];
          }
        }
      )
    }
  }

  public updateOrCreateClient() {
    this.clientService.createClient(this.client).subscribe(
      success => {
        this.client = success.data;
      }
    );
  }

}
