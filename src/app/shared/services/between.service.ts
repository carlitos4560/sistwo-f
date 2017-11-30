import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class BetweenService {

    private vista = new BehaviorSubject<number>(6);
    currentVista = this.vista.asObservable();

    constructor() { }

    changeView(id: number) {
        this.vista.next(id);
    }

}
