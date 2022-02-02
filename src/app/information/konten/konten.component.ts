import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Kontengruppe, Konto } from 'src/app/shared/models/konto';
import { KontoStoreService } from 'src/app/shared/services/konto-store.service';

@Component({
  selector: 'app-konten',
  templateUrl: './konten.component.html',
  styleUrls: ['./konten.component.css']
})
export class KontenComponent implements OnInit, OnDestroy {
  title = 'Konten';

  kontengruppen?: Kontengruppe[];
  aktKontengruppe?: Kontengruppe;
  addKontengruppe?: Kontengruppe;
  delKontengruppe?: Kontengruppe;
  isLoaded = false;

  sub?: Subscription;

  constructor(private ks: KontoStoreService) { }
  
  ngOnInit(): void {
    this.getAllKontengruppen();
  }

  getAllKontengruppen() {
    this.sub = this.ks.getAllKontengruppen().subscribe(
      (response: Kontengruppe[]) => {
        this.kontengruppen = response;
        this.isLoaded = true;
      }
    );
  }

  // Eventhalters:
  newAktKontengruppe(aktKontengruppe: Kontengruppe) {
    this.aktKontengruppe = aktKontengruppe;
  }

  addNewKontengruppe(addKontengruppe: Kontengruppe) {
    this.ks.addNewKontengruppe(addKontengruppe).subscribe(
      (response: Kontengruppe) => {
        console.log('Die Kontengruppe mit ID: ', addKontengruppe?.id, ' wurde hinzugefügt.');
        this.getAllKontengruppen();
        this.newAktKontengruppe(addKontengruppe);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  updateKontengruppe(updKontengruppe: Kontengruppe) {
    this.ks.updKontengruppe(updKontengruppe).subscribe(
      (response: Kontengruppe) => {
        alert('Ales OK');
        this.getAllKontengruppen();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  };

  deleteKontengruppe(delKontengruppe: Kontengruppe) {
    this.ks.delKontengruppeById(delKontengruppe.id).subscribe(
      (response: void) => {
        console.log('Die Kontengruppe mit ID: ', delKontengruppe.id, ' wurde gelöscht.');
        this.getAllKontengruppen();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
  ngOnDestroy(): void {
    this.sub?.unsubscribe;
  }
}
