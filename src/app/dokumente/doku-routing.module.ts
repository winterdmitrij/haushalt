import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DokuComponent } from "./doku.component";
import { KontoauszuegeComponent } from "./kontoauszuege/kontoauszuege.component";
import { LaufendeAusgabenComponent } from "./laufende-ausgaben/laufende-ausgaben.component";
import { LaufendeEinkommenComponent } from "./laufende-einkommen/laufende-einkommen.component";
import { UeberweisungenComponent } from "./ueberweisungen/ueberweisungen.component";
import { AnfangskontostandComponent } from "./anfangskontostand/anfangskontostand.component";

const dokuRoutes: Routes = [
    { path: 'doku', component: DokuComponent, children: [
        { path: 'laufende-ausgaben', component: LaufendeAusgabenComponent },
        { path: 'laufende-einkommen', component: LaufendeEinkommenComponent },
        { path: 'kontoauszuege', component: KontoauszuegeComponent },
        { path: 'ueberweisungen', component: UeberweisungenComponent },
        { path: 'anfangskontostand', component: AnfangskontostandComponent }
    ]}
]
@NgModule({
    imports: [RouterModule.forChild(dokuRoutes)],
    exports: [RouterModule]
})
export class DokuRoutingModule {}