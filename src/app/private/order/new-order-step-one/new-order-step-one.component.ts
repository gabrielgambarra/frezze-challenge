import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pizza, Flavors } from 'src/app/providers/models/Pizza.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-order-step-one',
  templateUrl: './new-order-step-one.component.html',
  styleUrls: ['./new-order-step-one.component.scss']
})
export class NewOrderStepOneComponent implements OnInit {

  @ViewChild('pizzasForm') pizzasForm: NgForm;

  panelOpenState = false;
  pizza: Pizza = new Pizza();
  pizzas = [];
  pizzasToOrder: Pizza[] = [];
  componentRef: any;
  flavors = Flavors;

  constructor(
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  public addPizzaToOrder() {
    const newPizza = new Pizza();
    newPizza.halfNHalf = false;

    this.pizzas.push(
      new Pizza()
    );
  }

  public finishPizzaConfig(index) {
    this.pizzasToOrder.push(this.pizzas[index]);

    this.snackBar.open('Pizza adicionada ao pedido!', 'OK!', {
      duration: 5000,
      panelClass: ['feedback']
    });
  }

  public deletePizzaConfig(index) {
    this.pizzas.splice(index, 1);
    this.pizzasToOrder.splice(index, 1);
  }

}
