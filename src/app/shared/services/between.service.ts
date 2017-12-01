import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class BetweenService {

    private vista = new BehaviorSubject<any>({});
    currentVista = this.vista.asObservable();

    constructor() { }

    changeView(obj) {
        this.vista.next(obj);
    }

    getVista() {
        this.currentVista;
    }

}
