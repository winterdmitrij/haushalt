import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { InfoRoutingModule } from "./info-routing.module";
import { InfoComponent } from "./info.component";
import { KontenComponent } from './konten/konten.component';
import { AusgabenComponent } from './ausgaben/ausgaben.component';
import { EinkommenComponent } from './einkommen/einkommen.component';


@NgModule({
  declarations: [
    InfoComponent,
    KontenComponent,
    AusgabenComponent,
    EinkommenComponent
  ],
  imports: [
    CommonModule,
    InfoRoutingModule
  ]
})
export class InfoModule {}