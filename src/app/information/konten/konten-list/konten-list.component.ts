import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Kontengruppe } from 'src/app/shared/models/konto';
import { KontoStoreService } from 'src/app/shared/services/konto-store.service';

@Component({
  selector: 'app-konten-list',
  templateUrl: './konten-list.component.html',
  styleUrls: ['./konten-list.component.css']
})
export class KontenListComponent implements OnInit {

  @Input() kontengruppen?: Kontengruppe[];
  @Output() aktKontengruppe = new EventEmitter<Kontengruppe>();

  aktId?: number; 

  constructor(private ks: KontoStoreService) { }

  ngOnInit(): void {    
    this.ks.getKontengruppeById(1).subscribe(
      (response: Kontengruppe) => {
        this.aktKontengruppe.emit(response);
        this.aktId = 1;
      }
    );
  }

  OnClick(id: number) {
    this.ks.getKontengruppeById(id).subscribe(
      (response: Kontengruppe) => {
        this.aktKontengruppe.emit(response);
        this.aktId = id;
      }
    );
  }

}
