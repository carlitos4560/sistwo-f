import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

import { BetweenService } from '../services/between.service';

@Component({
    selector: 'layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.sass']
})
export class LayoutComponent implements OnInit, DoCheck, OnDestroy {

    view: number = 1;
    // para la vista de editar un plato
    vistaEdit: any;

    constructor(private bs: BetweenService) {
        this.bs.currentVista.subscribe(vistaEdit => this.view = vistaEdit);
    }

    ngOnInit() {
        //this.bs.currentVista.subscribe(vistaEdit => this.vistaEdit = vistaEdit);
    }

    ngDoCheck() {
        //if (this.vistaEdit.vista && this.vistaEdit.platoid) {
        //    console.log("cambio en layout component ");
        //    this.updateView(this.vistaEdit.vista);
        //}
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        //this.bs.currentVista.unsubscribe();
    }

    public updateView(value: number) {
        this.view = value;
    }

    receiveView($event) {
        this.updateView($event);
    }

}
