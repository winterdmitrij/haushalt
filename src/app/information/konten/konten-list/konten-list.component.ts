import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
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
  @Output() addKontengruppe = new EventEmitter<Kontengruppe>();

  sub?: Subscription;
  addForm!: FormGroup;
  
  aktId?: number;
  deleteKontengruppe?: Kontengruppe;
  editKontengruppe?: Kontengruppe;
  addKontengruppeObj?: Kontengruppe;
  
  delId?: number;
  test: any;
  
  constructor(
    private ks: KontoStoreService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {    
    this.onClick(1);
  }

  // Beim Auswahl von anderer Kontengruppe
  onClick(id: number) {
    if ( this.aktId !== id ) {
      this.sub = this.ks.getKontengruppeById(id).subscribe(
        (response: Kontengruppe) => {
          this.aktKontengruppe.emit(response);
          this.aktId = id;
        }
      );
    }
  }
  
  // ---------------------------------------//
  // modales Form: Kontengruppe hinzufügen  //
  // ---------------------------------------//
  
  // Initialisierung des Forms
  private initForm() {
    if ( this.addForm ) {
      return
    };
    this.addForm = new FormGroup({
      id: new FormControl(''),
      bezeichnung: new FormControl(''),
      kommentar: new FormControl('')
    })
  }
  
  // Beim Submit
  onSave() {
    document?.getElementById('add-kontengruppe-form')?.click(); // Forme schließen
    
    this.addKontengruppeObj = {
      'id': this.addForm.value.id,
      "bezeichnung": this.addForm.value.bezeichnung,
      "kommentar": this.addForm.value.kommentar
    };
    
    console.log('onSubmit: ', this.addKontengruppeObj);

    this.ks.addNewKontengruppe(this.addKontengruppeObj).subscribe(
      (response: Kontengruppe) => {
        console.log('Die Kontengruppe mit ID: ', this.addKontengruppeObj?.id, ' wurde hinzugefügt.');
        console.log(response);
        this.addKontengruppe.emit(response);
        this.onClick(response.id);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  // -----------------------------------//
  // modales Form: Kontengruppe löschen //
  // -----------------------------------//

  onDeleteKontengruppe(id: any) {
    this.ks.delKontengruppeById(id).subscribe(
      (response: void) => {
        console.log('Die Kontengruppe mit ID: ', id, ' wurde gelöscht.');
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  // Modale Formen
  onOpenModal(mode: string, kontengruppe?: Kontengruppe) {
    console.log('onOpenModal: MODE = ', mode);
    
    const container = document.getElementById('main-container');
    
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    
    if ( mode === 'edit' ) {
      this.editKontengruppe = kontengruppe;
      button.setAttribute('data-bs-target', '#editKontengruppe');
    }
    if ( mode === 'delete' ) {
      this.deleteKontengruppe = kontengruppe;
      button.setAttribute('data-bs-target', '#deleteKontengruppe');
    }
    if ( mode === 'add' ) {
      this.initForm();
      button.setAttribute('data-bs-target', '#addKontengruppe');
    }
    
    container?.appendChild(button);
    button.click();
  }

  // Bei Ausgang
  ngOnDestroy(): void {
    this.sub?.unsubscribe;
  }
}
