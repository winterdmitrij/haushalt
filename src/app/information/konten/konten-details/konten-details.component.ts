import { Component, Input, OnInit } from '@angular/core';
import { Kontengruppe } from 'src/app/shared/models/konto';

@Component({
  selector: 'app-konten-details',
  templateUrl: './konten-details.component.html',
  styleUrls: ['./konten-details.component.css']
})
export class KontenDetailsComponent implements OnInit {

  @Input() aktKontengruppe?: Kontengruppe;

  constructor() { }

  ngOnInit(): void {}

}
