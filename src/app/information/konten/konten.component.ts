import { Component, OnDestroy, OnInit } from '@angular/core';
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
  id?: number = 1;
  isLoaded = false;

  sub1?: Subscription;
  sub2?: Subscription;

  constructor(private ks: KontoStoreService) { }
  
  ngOnInit(): void {
    console.log("Kontenkomponent:");
    
    this.sub1 = this.ks.getAllKontengruppen().subscribe(
      (response: Kontengruppe[]) => {
        this.kontengruppen = response;
        this.isLoaded = true;
        console.log('Konten: ', response);  
      }
    );

    // this.sub2 = this.ks.getKontengruppeById(1).subscribe(
    //   (response: Kontengruppe) => {
    //     this.aktKontengruppe = response;
    //   }
    // );

    // if (this.sub1 != null && this.sub2 != null) {
    //   this.isLoaded = true;
    // };
  }

  newAktKontengruppe(aktKontengruppe: Kontengruppe) {
    this.aktKontengruppe = aktKontengruppe;
  }
  
  ngOnDestroy(): void {
    this.sub1?.unsubscribe;
    this.sub2?.unsubscribe;
  }
}
