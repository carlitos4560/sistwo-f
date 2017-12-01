import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { Router } from '@angular/router';

import { Refresco } from '../../../models/refresco';
import { RefrescoService } from '../../../services/refresco.service';
import { BetweenService } from '../../../services/between.service';

@Component({
    selector: 'refrescomenu',
    templateUrl: './refrescomenu.component.html',
    styleUrls: ['./refrescomenu.component.sass']
})
export class RefrescomenuComponent implements OnInit {

    vistaEdit: any;
    dataSource = new RefrescoDataSource(this.refrescoService);
    displayedColumns = [
        'nombre',
        'precio',
        'cantidad',
        'categoria',
        'opciones'
    ];

    constructor(
        private refrescoService: RefrescoService,
        private bs: BetweenService,
        private router: Router
    ) {}

    ngOnInit() {
        this.bs.currentVista.subscribe(vistaEdit => this.vistaEdit = vistaEdit);
    }

    editRefresco(id) {
        console.log(id);
        this.bs.changeView(9);
    }

    destroyRefresco(id) {
        console.log(id);
        this.refrescoService.destroy(id).subscribe(
            (val) => {
                console.log("DELETE call successful value returned in body", val);
                this.router.navigate(['/']);
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

export class RefrescoDataSource extends DataSource<any> {

    constructor(private refrescoService: RefrescoService) {
        super();
    }

    connect(): Observable<Refresco[]> {
        return this.refrescoService.list();
    }

    disconnect() {}
}
