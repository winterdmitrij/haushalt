import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { LaufendeAusgabenComponent } from './laufende-ausgaben/laufende-ausgaben.component';
import { LaufendeEnkommenComponent } from './laufende-enkommen/laufende-enkommen.component';
import { KontoauszuegeComponent } from './kontoauszuege/kontoauszuege.component';
import { UeberweisungenComponent } from './ueberweisungen/ueberweisungen.component';
import { AnfangskontostandComponent } from './anfangskontostand/anfangskontostand.component';
import { DokuRoutingModule } from "./doku-routing.module";

@NgModule({
    declarations: [
        LaufendeAusgabenComponent,
        LaufendeEnkommenComponent,
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