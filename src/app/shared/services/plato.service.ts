import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Plato } from '../models/plato';

@Injectable()
export class PlatoService {

    platosUrl: string = 'http://sistwo-b.com/api/platos';
    saveUrl: string = 'http://sistwo-b.com/api/platos';

    constructor(private http: HttpClient) { }

    getPlatos(): Observable<Plato[]> {
        return this.http.get<Plato[]>(this.platosUrl);
    }

    addPlato(plato: any): Observable<any> {
        return this.http.post(this.saveUrl, plato);
    }

}
