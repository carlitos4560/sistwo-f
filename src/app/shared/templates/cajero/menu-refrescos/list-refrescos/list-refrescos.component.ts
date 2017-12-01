import { Component, OnInit } from '@angular/core';

import { Refresco } from '../../../../models/refresco';

@Component({
    selector: 'f-list-refrescos',
    templateUrl: './list-refrescos.component.html',
    styleUrls: ['./list-refrescos.component.sass']
})
export class ListRefrescosComponent implements OnInit {

    refrescos: Array<Refresco> = [
        {id:1, categoria_refresco_id:1, tipo_refresco_id:1, precio:12, cantidad_unidades:55},
        {id:2, categoria_refresco_id:1, tipo_refresco_id:1, precio:12, cantidad_unidades:44},
        {id:3, categoria_refresco_id:1, tipo_refresco_id:1, precio:12, cantidad_unidades:33},
    ];
    constructor() { }

    ngOnInit() {
    }

}
