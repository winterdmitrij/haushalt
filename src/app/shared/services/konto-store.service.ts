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

  // Alle KontenGruppen anzeigen
  getAllKontengruppen(): Observable<Kontengruppe[]> {
    return this.get('kontengruppen');
  }

  // Alle Konten der aktuellen Kontengruppe anzeigen
  getKontengruppeById(id: number): Observable<Kontengruppe> {
    return this.get(`kontengruppen/${id}`);
  }

  // Eine neue Gruppe hinzufügen
  addNewKontengruppe(kontengruppe: Kontengruppe): Observable<Kontengruppe> {
    return this.post('kontengruppen/', kontengruppe );
  }

  // Ändern einer Kontengruppe
  updKontengruppeById(kontengruppe: Kontengruppe): Observable<Kontengruppe> {
    return this.put(`kontengruppen/${kontengruppe.id}`, kontengruppe);
  }

  // Löschen eine Kontengruppe
  delKontengruppeById(id: number): Observable<void> {
    return this.delete(`kontengruppen/${id}`);
  }
}
