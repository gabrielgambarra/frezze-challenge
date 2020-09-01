import { Component, OnInit, Input } from '@angular/core';
import { ClientAddress } from 'src/app/providers/models/Client.model';
import { ClientService } from 'src/app/providers/services/client.service';

@Component({
  selector: 'app-delivery-eddress-form',
  templateUrl: './delivery-eddress-form.component.html',
  styleUrls: ['./delivery-eddress-form.component.scss']
})
export class DeliveryEddressFormComponent implements OnInit {

  @Input('clientAddress') deliveryEddress: ClientAddress = new ClientAddress();
  @Input('tabIndex') tabIndex: number;

  clientAddress: ClientAddress;

  constructor(
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
  }

  public getEddressByZipCode(zipCode: string) {
    if (zipCode.length == 8) {
      this.clientService.getClientEddressByZipCode(this.deliveryEddress.zipCode).subscribe(
        success => {
          this.deliveryEddress.streetAddress = success.logradouro;
          this.deliveryEddress.neighborhood = success.bairro;
          this.deliveryEddress.city = success.localidade;
          this.deliveryEddress.state = success.uf;
        }
      );
    }
  }

}
