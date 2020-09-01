import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ENDPOINTS } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private cepBaseURL = "https://viacep.com.br/ws/";
  private clientUrl = environment.apiUrl + ENDPOINTS.CLIENT;

  constructor(
    private http: HttpClient
  ) { }

  public getClientEddressByZipCode(zipCode: string): Observable<any> {
    return this.http.get(`${this.cepBaseURL}${zipCode}/json`);
  }

  public checkIfClientExists(identityId): Observable<any> {
    return this.http.get(`${this.clientUrl}?clientIdentityId=${identityId}`);
  }

  public updateClientInfo(client): Observable<any> {
    return this.http.put<any>(`${this.clientUrl}/${client.id}`, client);
  }

  public createClient(client): Observable<any> {
    return this.http.post<any>(`${this.clientUrl}`, client);
  }

}
