import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Order } from 'src/app/providers/models/OrderRequest.model';

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss']
})
export class DetailsModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Order
  ) { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
