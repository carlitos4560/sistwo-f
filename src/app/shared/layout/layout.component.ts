import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.sass']
})
export class LayoutComponent implements OnInit {

    view: number = 1;

    constructor() { }

    ngOnInit() {
    }

    updateView(value: number) {
        this.view = value;
    }

    receiveView($event) {
        this.updateView($event);
    }
}
