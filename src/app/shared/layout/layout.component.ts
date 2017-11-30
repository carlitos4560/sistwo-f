import { Component, OnInit } from '@angular/core';
import { BetweenService } from '../services/between.service';

@Component({
    selector: 'layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.sass']
})
export class LayoutComponent implements OnInit {

    view: number = 1;
    // para la vista de editar un plato
    vistaEdit: number;

    constructor(private bs: BetweenService) { }

    ngOnInit() {
        //this.bs.currentVista.subscribe(vistaEdit => this.vista = vistaEdit);
    }

    updateView(value: number) {
        this.view = value;
    }

    receiveView($event) {
        this.updateView($event);
    }
}
