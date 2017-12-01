import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
    selector: 'three-cajero',
    templateUrl: './three.component.html',
    styleUrls: ['./three.component.sass']
})
export class ThreeCajeroComponent implements OnInit {

    @Output()
    viewEvent = new EventEmitter<number>();

    constructor() { }

    ngOnInit() {
    }

    action(value: number) {
        this.viewEvent.emit(value);
    }

}
