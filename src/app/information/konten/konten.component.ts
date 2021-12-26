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

  // В konten-list есть onClick!!!!!!!!!!!
  newAktKontengruppe(aktKontengruppe: Kontengruppe) {
    this.aktKontengruppe = aktKontengruppe;
  }

  newKontengruppe(addKontengruppe: Kontengruppe) {
    this.addKontengruppe = addKontengruppe;
    this.getAllKontengruppen();
    // this.newAktKontengruppe(addKontengruppe);
  }
  
  ngOnDestroy(): void {
    this.sub?.unsubscribe;
  }
}
