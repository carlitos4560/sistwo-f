import { Component, OnInit, Input } from '@angular/core';
import { Refresco } from '../../../../../models/refresco';

@Component({
    selector: 'f-refrescocajero',
    templateUrl: './refrescocajero.component.html',
    styleUrls: ['./refrescocajero.component.sass']
})
export class RefrescocajeroComponent implements OnInit {

    @Input()
    refresco: Refresco;

    constructor() { }

    ngOnInit() {
    }

}
