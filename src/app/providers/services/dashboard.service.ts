import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ENDPOINTS } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private orderUrl = environment.apiUrl + ENDPOINTS.ORDERS;
  private today = moment(new Date()).format('YYYY-MM-DD');
  private nextDay = new Date().setDate(new Date().getDate()+1);
  private tomorow = moment(this.nextDay).format('YYYY-MM-DD');

  constructor(
    private http: HttpClient
  ) { }

  public getOrdersByStatusPreparando(): Observable<any> {
    return this.http.get(`${this.orderUrl}?registeredStartDate=${this.today}&registeredEndDate=${this.tomorow}&status=PREPARANDO`);
  }

  public getOrdersScheduleds(): Observable<any> {
    return this.http.get(`${this.orderUrl}?scheduledStartDate=${this.today}&scheduledEndDate=${this.tomorow}&orderBy=registeredIn`);
  }

  public getOrdersOfDay(page): Observable<any> {
    return this.http.get(`${this.orderUrl}?registeredStartDate=${this.today}&registeredEndDate=${this.tomorow}&page=${page}&size=10&orderBy=registeredIn`);
  }

}
