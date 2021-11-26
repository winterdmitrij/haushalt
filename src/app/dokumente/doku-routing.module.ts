import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AusgabenComponent } from "../information/ausgaben/ausgaben.component";
import { DokuComponent } from "./doku.component";
import { KontoauszuegeComponent } from "./kontoauszuege/kontoauszuege.component";
import { LaufendeAusgabenComponent } from "./laufende-ausgaben/laufende-ausgaben.component";
import { LaufendeEnkommenComponent } from "./laufende-enkommen/laufende-enkommen.component";
import { UeberweisungenComponent } from "./ueberweisungen/ueberweisungen.component";

const routes: Routes = [
    { path: 'doku', component: DokuComponent, children: [
        { path: 'laufende-ausgaben', component: LaufendeAusgabenComponent },
        { path: 'laufende-einkommen', component: LaufendeEnkommenComponent },
        { path: 'kontoauszuege', component: KontoauszuegeComponent },
        { path: 'ueberweisungen', component: UeberweisungenComponent },
        { path: 'anfangskontostand', component: AusgabenComponent }
    ]}
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DokuRoutingModule {}