import { Component, OnInit, Input } from '@angular/core';

import { Plato } from '../../../../../models/plato';

@Component({
    selector: 'f-platocajero',
    templateUrl: './platocajero.component.html',
    styleUrls: ['./platocajero.component.sass']
})
export class PlatocajeroComponent implements OnInit {

    @Input()
    plato: Plato;

    constructor() { }

    ngOnInit() {
    }

}
