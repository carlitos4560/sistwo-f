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
        this.bs.currentVista.subscribe(vistaEdit => this.vistaEdit = vistaEdit);
    }

    ngOnInit() {
        //this.bs.currentVista.subscribe(vistaEdit => this.vistaEdit = vistaEdit);
    }

    ngDoCheck() {
        //if (this.vistaEdit.vista && this.vistaEdit.platoid) {
        //    console.log("cambio en layout component ");
        //    this.updateView(this.vistaEdit.vista);
        //}
        console.log("layout docheck");
        console.log(this.vistaEdit);
        console.log("model abajo");
        console.log(this.vistaEdit.model);
        if (this.vistaEdit.model != undefined && this.vistaEdit.view != undefined) {
            console.log("model abajo no es undefined");
            console.log(this.vistaEdit.model);
            this.updateView(this.vistaEdit.view);
        }
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        //this.bs.currentVista.unsubscribe();
    }

    updateView(value: number) {
        this.view = value;
    }

    receiveView($event) {
        this.updateView($event);
    }

}
