import { Component, OnInit } from '@angular/core';
import { Kontengruppe, Konto } from 'src/app/shared/models/konto';
import { KontoStoreService } from 'src/app/shared/services/konto-store.service';

@Component({
  selector: 'app-konten',
  templateUrl: './konten.component.html',
  styleUrls: ['./konten.component.css']
})
export class KontenComponent implements OnInit {
  title = 'Konten';
  kontengruppen?: Kontengruppe[];
  aktKontengruppe?: Kontengruppe;
  konten?: Konto[];

  constructor(private ks: KontoStoreService) { }

  ngOnInit(): void {
    this.kontengruppen = this.ks.getAllKontengruppen();
    this.aktKontengruppe = this.ks.getKontengruppeById(1);
  }

  OnClick(id: number) {
    this.aktKontengruppe = this.ks.getKontengruppeById(id);
  }

}
