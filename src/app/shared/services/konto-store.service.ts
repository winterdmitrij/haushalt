import { Injectable } from '@angular/core';
import { Kontengruppe, Konto } from '../models/konto';

@Injectable({
  providedIn: 'root'
})
export class KontoStoreService {

  kontenGruppen: Kontengruppe[];
  kontoGruppe?: Kontengruppe;
  //konten: Konto[];
  //konto: Konto; 

  constructor() {

    this.kontenGruppen = [
      {
        id: 1,
        bezeichnung: 'Karten',
        beschreibung: 'Das bargeldlose Geld',
        konten: [
          {
            id: 11,
            bezeichnung: 'EC',
            beschreibung: 'Sparkasse',
            istSichtbar: true
          }
        ]
      },
      {
        id: 2,
        bezeichnung: 'Bargeld',
        beschreibung: 'Das Geld im Umlauf',
        konten: [
          {
            id: 21,
            bezeichnung: 'Portmonnee',
            beschreibung: 'Geld für laufende Ausgaben',
            istSichtbar: true
          },
          {
            id: 22,
            bezeichnung: 'Reserve',
            beschreibung: 'Kurzfristige Einsparungen',
            istSichtbar: true
          }
        ]
      },
      {
        id: 3,
        bezeichnung: 'AEGU',
        beschreibung: 'Das Geld für besondere Zwecke',
        konten: [
          {
            id: 31,
            bezeichnung: 'Auto',
            istSichtbar: true
          },
          {
            id: 32,
            bezeichnung: 'Einrichtung',
            istSichtbar: true
          },
          {
            id: 33,
            bezeichnung: 'Geschänke',
            istSichtbar: true
          },
          {
            id: 34,
            bezeichnung: 'Urlaub',
            istSichtbar: true
          }
        ]
      },
      {
        id: 4,
        bezeichnung: 'Einsparungen',
        beschreibung: 'Die langfristige Einsparungen',
        konten: [
          {
            id: 41,
            bezeichnung: 'Tresor',
            istSichtbar: false
          },
          {
            id: 42,
            bezeichnung: 'Anastasia',
            istSichtbar: true
          },
          {
            id: 43,
            bezeichnung: 'Ekaterina',
            istSichtbar: true
          }
        ]
      }
    ]
  }

  // Get
  getAllKontengruppen() {
    return this.kontenGruppen;
  }
  getKontengruppeById(id: number) {
    return this.kontenGruppen.find( kg => kg.id == id );
  }
}
