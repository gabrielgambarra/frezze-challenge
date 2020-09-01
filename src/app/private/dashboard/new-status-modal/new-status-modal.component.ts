import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Order, Status, StatusType } from 'src/app/providers/models/OrderRequest.model';
import { OrderService } from 'src/app/providers/services/order.service';

@Component({
  selector: 'app-new-status-modal',
  templateUrl: './new-status-modal.component.html',
  styleUrls: ['./new-status-modal.component.scss']
})
export class NewStatusModalComponent implements OnInit {

  statusTypes = [];
  newStatus: StatusType;

  constructor(
    public dialogRef: MatDialogRef<NewStatusModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Order,
    private orderService: OrderService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.newStatus = this.data.status;
    this.buildPossiblesStatus();
  }

  public updateStatus() {
    this.data.status = this.newStatus;

    this.orderService.updateOrderStatus(this.data).subscribe(
      success => {
        if (success.status == 202) {
          this.snackBar.open(success.errors[0], 'OK!', {
            duration: 5000,
            panelClass: ['feedback-error']
          });
        }

        if (success.status == 200) {
          this.snackBar.open('Status atualizado!', 'OK!', {
            duration: 5000,
            panelClass: ['feedback']
          });
        }

        this.dialogRef.close();
      }
    );
  }

  private buildPossiblesStatus() {
    switch (this.data.status) {
      case StatusType.ABERTO:
        this.statusTypes.push(
          { value: StatusType.ABERTO, view: 'Aberto' },
          { value: StatusType.CONTATAR_CLIENTE, view: 'Contatar cliente' },
          { value: StatusType.PREPARANDO, view: 'Preparando' },
          { value: StatusType.CANCELADO, view: 'Cancelado' }
        );
        break;

      case StatusType.CONTATAR_CLIENTE:
        this.statusTypes.push(
          { value: StatusType.CONTATAR_CLIENTE, view: 'Contatar cliente' },
          { value: StatusType.PREPARANDO, view: 'Preparando' },
          { value: StatusType.CANCELADO, view: 'Cancelado' }
        );
        break;

      case StatusType.PREPARANDO:
        this.statusTypes.push(
          { value: StatusType.PREPARANDO, view: 'Preparando' },
          { value: StatusType.SAIU_PARA_ENTREGA, view: 'Saiu para entrega' },
          { value: StatusType.CANCELADO, view: 'Cancelado' }
        );
        break;

      case StatusType.SAIU_PARA_ENTREGA:
        this.statusTypes.push(
          { value: StatusType.SAIU_PARA_ENTREGA, view: 'Saiu para entrega' },
          { value: StatusType.ENTREGUE, view: 'Entregue' }
        );
        break;

      case StatusType.ENTREGUE:
        this.statusTypes.push(
          { value: StatusType.ENTREGUE, view: 'Entregue' },
          { value: StatusType.FINALIZADO, view: 'Finalizado' }
        );
        break;

      default:
        break;
    }
  }

}
