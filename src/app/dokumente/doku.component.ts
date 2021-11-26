import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-doku.component',
    templateUrl: './doku.component.html'
})
export class DokuComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit(): void {
        this.router.navigate(['/doku', 'laufende-ausgaben']);
    }
}