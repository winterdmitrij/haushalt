import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Kontengruppe } from 'src/app/shared/models/konto';
import { KontoStoreService } from 'src/app/shared/services/konto-store.service';

@Component({
  selector: 'app-konten-list',
  templateUrl: './konten-list.component.html',
  styleUrls: ['./konten-list.component.css']
})
export class KontenListComponent implements OnInit, OnDestroy {

  @Input() kontengruppen?: Kontengruppe[];
  @Output() aktKontengruppe = new EventEmitter<Kontengruppe>();

  aktId?: number;
  sub?: Subscription;
  addForm!: FormGroup;
  delId?: number;
  deleteKontengruppe?: Kontengruppe;

  constructor(
    private ks: KontoStoreService,
    private router: Router
  ) { }

  ngOnInit(): void {    
    this.sub = this.ks.getKontengruppeById(1).subscribe(
      (response: Kontengruppe) => {
        this.aktKontengruppe.emit(response);
        this.aktId = 1;
      }
    );
    this.onAddKontengruppe();
  }

  // Beim Auswahl von anderer Kontengruppe
  onClick(id: number) {
    this.sub = this.ks.getKontengruppeById(id).subscribe(
      (response: Kontengruppe) => {
        this.aktKontengruppe.emit(response);
        this.aktId = id;
        console.log('onClick: ', response);
      }
    );
    
  }

  // ---------------------------------------//
  // modales Form: Kontengruppe hinzufügen  //
  // ---------------------------------------//

  // Beim Start des Forms
  onAddKontengruppe() {
    console.log('Add Kontengruppe');
    this.addForm = new FormGroup({
      'id': new FormControl(''),
      'bezeichnung': new FormControl(''),
      'beschreibung': new FormControl('')
    })
    
  }
  
  // Beim Submit
  onSave() {
    console.log('On Submit');
    
  }
  
  // public onAddKontengruppe(addForm: NgForm): void {
  //   // document?.getElementById('add-taggroups-form')?.click();
  //   this.ks.addNewKontengruppe(addForm.value).subscribe(
  //     (response: Kontengruppe) => {
  //       console.log(response);
  //       this.onGetKontengruppe(response.id);
  //       addForm.reset();
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //       //addForm.reset();
  //     }
  //   );
  // }

  // ---------------------------------------//
  // modales Form: Kontengruppe hinzufügen  //
  // ---------------------------------------//

  // Beim Start
  onStartDelModal(id: number){
    console.log(id);
    // this.sub = this.ks.getKontengruppeById(id).subscribe(
    //   (response: Kontengruppe) => {
    //     this.aktKontengruppe.emit(response);
    //     this.aktId = id;
    //   }
    // );
    this.onClick(id);
    this.delId = this.aktId;
  }

  onDeleteKontengruppe() {
    if (this.delId != undefined) {
      this.ks.delKontengruppeById(this.delId);
      console.log('kontengruppe ', this.delId,  ' wurde gelöscht');
    }
  }


  ngOnDestroy(): void {
    // this.sub?.unsubscribe;
  }


  onOpenModal(kontengruppe: Kontengruppe, mode: string) {
    this.onClick(kontengruppe.id);
    console.log(kontengruppe, ' - ', mode);
    
    const container = document.getElementById('main-container');
   

    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');

    if ( mode === 'delete' ) {
      this.deleteKontengruppe = kontengruppe;
      button.setAttribute('data-bs-target', '#deleteKontengruppe');
    }

    container?.appendChild(button);
    button.click();
  }
}
