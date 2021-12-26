import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { InfoRoutingModule } from "./info-routing.module";
import { InfoComponent } from "./info.component";
import { KontenComponent } from './konten/konten.component';
import { AusgabenComponent } from './ausgaben/ausgaben.component';
import { EinkommenComponent } from './einkommen/einkommen.component';
import { KontenListComponent } from './konten/konten-list/konten-list.component';
import { KontenDetailsComponent } from './konten/konten-details/konten-details.component';

@NgModule({
  declarations: [
    InfoComponent,
    KontenComponent,
    AusgabenComponent,
    EinkommenComponent,
    KontenListComponent,
    KontenDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InfoRoutingModule
  ]
})
export class InfoModule {}