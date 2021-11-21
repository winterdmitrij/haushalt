import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AusgabenComponent } from "./ausgaben/ausgaben.component";
import { EinkommenComponent } from "./einkommen/einkommen.component";
import { InfoComponent } from "./info.component";
import { KontenComponent } from "./konten/konten.component";

const routes: Routes = [
    { path: 'info', component: InfoComponent, children: [
        { path: 'ausgaben', component: AusgabenComponent },
        { path: 'einkommen', component: EinkommenComponent },
        { path: 'konten', component: KontenComponent }
    ]}
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InfoRoutingModule {}