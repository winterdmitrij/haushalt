import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { DokuComponent } from "./doku.component";
import { LaufendeAusgabenComponent } from './laufende-ausgaben/laufende-ausgaben.component';
import { LaufendeEinkommenComponent } from './laufende-einkommen/laufende-einkommen.component';
import { KontoauszuegeComponent } from './kontoauszuege/kontoauszuege.component';
import { UeberweisungenComponent } from './ueberweisungen/ueberweisungen.component';
import { AnfangskontostandComponent } from './anfangskontostand/anfangskontostand.component';
import { DokuRoutingModule } from "./doku-routing.module";

@NgModule({
    declarations: [
        DokuComponent,
        LaufendeAusgabenComponent,
        LaufendeEinkommenComponent,
        KontoauszuegeComponent,
        UeberweisungenComponent,
        AnfangskontostandComponent
    ],
    imports: [
        CommonModule,
        DokuRoutingModule
    ]
})
export class DokuModule {}