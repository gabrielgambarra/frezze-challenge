import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ENDPOINTS } from '../../constants';
import { Order } from '../models/OrderRequest.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderUrl = environment.apiUrl + ENDPOINTS.ORDERS;

  constructor(
    private http: HttpClient
  ) { }

  public createNewOrder(requestOrder): Observable<any> {
    return this.http.post(`${this.orderUrl}`, requestOrder);
  }

  public updateOrderStatus(item: Order): Observable<any> {
    return this.http.put(`${this.orderUrl}/${item.id}`, item);
  }
}
