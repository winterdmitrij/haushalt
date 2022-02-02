import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Kontengruppe, Konto } from 'src/app/shared/models/konto';
import { KontoStoreService } from 'src/app/shared/services/konto-store.service';
import { getTokenSourceMapRange } from 'typescript';

@Component({
  selector: 'app-konten-list',
  templateUrl: './konten-list.component.html',
  styleUrls: ['./konten-list.component.css']
})
export class KontenListComponent implements OnInit, OnDestroy {

  @Input() kontengruppen?: Kontengruppe[];
  @Output() aktKontengruppe = new EventEmitter<Kontengruppe>();

  @Output() addKontengruppe = new EventEmitter<Kontengruppe>();
  @Output() updKontengruppe = new EventEmitter<Kontengruppe>();
  @Output() delKontengruppe = new EventEmitter<Kontengruppe>();

  sub?: Subscription;
  addForm!: FormGroup;
  updForm!: FormGroup;
  konten?: Konto[];
  
  aktId?: number;
  addedKontengruppe?: Kontengruppe;
  deletedKontengruppe?: Kontengruppe;
  editedKontengruppe?: Kontengruppe;
  
  delId?: number;
  test: any;
  
  constructor(
    private ks: KontoStoreService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
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
    if ( this.addForm && this.updForm ) {
      return;
    };
    this.addForm = new FormGroup({
      id: new FormControl(''),
      bezeichnung: new FormControl(''),
      kommentar: new FormControl('')
    });
    this.updForm = new FormGroup({
      id: new FormControl(''),
      bezeichnung: new FormControl(''),
      kommentar: new FormControl('')
    });
  }

  getKonten(): FormArray {
    return this.addForm.get('konten') as FormArray;
  }

  
  // Beim Submit
  onSave() {
    document?.getElementById('add-kontengruppe-form')?.click(); // Forme schließen
    
    this.addedKontengruppe = {
      'id': this.addForm.value.id,
      "bezeichnung": this.addForm.value.bezeichnung,
      "kommentar": this.addForm.value.kommentar
    };

    console.log(this.addedKontengruppe);
    
    
    this.addKontengruppe.emit(this.addedKontengruppe);      // Abschicken

    this.addForm.reset();
  }

  // -----------------------------------//
  // modales Form: Kontengruppe löschen //
  // -----------------------------------//
  onDeleteKontengruppe(id: any) {
    this.ks.getKontengruppeById(id).subscribe(
      (response: Kontengruppe) => {
        this.delKontengruppe.emit(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  // ----------------------------------//
  // modales Form: Kontengruppe ändern //
  // ----------------------------------//
  onEditKontengruppe() {
    this.updForm.controls['id'].setValue(this.editedKontengruppe?.id);
    this.updForm.controls['bezeichnung'].setValue(this.editedKontengruppe?.bezeichnung);
    this.updForm.controls['kommentar'].setValue(this.editedKontengruppe?.kommentar);
    
    console.log(this.updForm.value);
  }

  onAendern(){
    document?.getElementById('closeEditForm')?.click(); // Forme schließen
    
    this.editedKontengruppe = {
      'id': this.updForm.value.id,
      "bezeichnung": this.updForm.value.bezeichnung,
      "kommentar": this.updForm.value.kommentar
    };

    this.updKontengruppe.emit(this.editedKontengruppe);      // Abschicken
    
    this.updForm.reset();
  }


//---------------------------------------------------------------------------------------
  // Beim Start von modalen Formen
  onOpenModal(mode: string, kontengruppe?: Kontengruppe) {
    console.log('onOpenModal: MODE = ', mode);
    
    const container = document.getElementById('main-container');
    
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    
    if ( mode === 'edit' ) {
      this.editedKontengruppe = kontengruppe;
      button.setAttribute('data-bs-target', '#editKontengruppe');
      this.onEditKontengruppe();
    }
    if ( mode === 'delete' ) {
      this.deletedKontengruppe = kontengruppe;
      button.setAttribute('data-bs-target', '#deleteKontengruppe');
    }
    if ( mode === 'add' ) {
      button.setAttribute('data-bs-target', '#addKontengruppe');
    }
    
    container?.appendChild(button);
    button.click();
  }

  // Beim Ausgang
  ngOnDestroy(): void {
    this.sub?.unsubscribe;
  }
}
