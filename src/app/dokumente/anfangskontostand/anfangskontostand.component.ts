import { Component, OnInit } from '@angular/core';
import { Kontostand } from 'src/app/shared/models/konto';
import { KontoStoreService } from 'src/app/shared/services/konto-store.service';

@Component({
  selector: 'app-anfangskontostand',
  templateUrl: './anfangskontostand.component.html',
  styleUrls: ['./anfangskontostand.component.css']
})
export class AnfangskontostandComponent implements OnInit {

  kontoStaende?: Kontostand[];

  constructor(private kss: KontoStoreService) { }

  ngOnInit(): void {
    this.kontoStaende = this.kss.getAlleKontostaende();
  }

}
