import { Component, OnInit, Output, EventEmitter, DoCheck } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';

import { LayoutComponent } from '../../../layout/layout.component';

import { Plato } from '../../../models/plato';
import { PlatoService } from '../../../services/plato.service';
import { BetweenService } from '../../../services/between.service';

@Component({
    selector: 'menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

    vistaEdit: any;
    dataSource = new PlatoDataSource(this.platoService);
    displayedColumns = ['nombre', 'porcion', 'precio', 'descripcion', 'opciones'];

    constructor(
        private platoService: PlatoService,
        private bs: BetweenService
    ) {}

    ngOnInit() {
        this.bs.currentVista.subscribe(vistaEdit => this.vistaEdit = vistaEdit);
    }

    editPlato(id) {
        console.log(id);
        //let v = {vista:8, platoid:id};
        this.bs.changeView(8);
        //console.log(v);
    }

    destroy(id) {
        console.log(id);
        this.platoService.destroyPlato(id).subscribe(
            (val) => {
                console.log("DELETE call successful value returned in body", val);
            },
            response => {
                console.log("DELETE call in error", response);
            },
            () => {
                console.log("The DELETE observable is now completed.");
            }
        );
    }

}

export class PlatoDataSource extends DataSource<any> {

    constructor(private platoService: PlatoService) {
        super();
    }

    connect(): Observable<Plato[]> {
        return this.platoService.getPlatos();
    }

    disconnect() {}
}
