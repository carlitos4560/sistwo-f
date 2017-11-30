import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';

import { Plato } from '../../../models/plato';
import { PlatoService } from '../../../services/plato.service';

@Component({
    selector: 'menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

    //platos: Observable<Plato[]>; 

    dataSource = new PlatoDataSource(this.platoService);
    displayedColumns = ['id', 'nombre', 'porcion', 'precio', 'descripcion', 'imagen'];

    constructor(private platoService: PlatoService) { }

    ngOnInit() {
        //this.platos = this.platoService.getPlatos(); 
        //this.platos = this.platoService.getPlatos().subscribe(data => { this.platos = data }); 
        //this.dataSource = this.platos;
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
