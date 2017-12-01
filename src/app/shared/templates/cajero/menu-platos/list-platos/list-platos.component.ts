import { Component, OnInit } from '@angular/core';

import { Plato } from '../../../../models/plato';
import { PlatoService } from '../../../../services/plato.service';

@Component({
    selector: 'f-list-platos',
    templateUrl: './list-platos.component.html',
    styleUrls: ['./list-platos.component.sass']
})
export class ListPlatosComponent implements OnInit {

    platos: Array<Plato>;

    constructor(private platoService: PlatoService) { }

    ngOnInit() {
        this.platoService.getPlatos().subscribe(
            (val) => {
                this.platos = val; 
            },
            response => {
                console.log("GET call in error", response);
            },
            () => {
                console.log("The GET observable is now completed.");
            },
        );
    }

}
