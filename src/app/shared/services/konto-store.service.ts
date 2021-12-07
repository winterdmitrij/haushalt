import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi } from '../core/base-api';
import { Kontengruppe, Konto, Kontostand } from '../models/konto';

@Injectable({
  providedIn: 'root'
})
export class KontoStoreService extends BaseApi {

  constructor(public http: HttpClient) {
    super(http);
  }

  // KontenGruppen
  getAllKontengruppen(): Observable<Kontengruppe[]> {
    return this.get('kontengruppen');
  }

  getKontengruppeById(id: number): Observable<Kontengruppe> {
    let url = 'kontengruppen/' + id;
    return this.get(url);
  }

}
