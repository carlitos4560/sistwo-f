import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { TipoRefresco } from '../models/tipo-refresco';

@Injectable()
export class TipoRefrescoService {

    private URL: string = 'http://sistwo-b.com/api/refrescos/tipos';

    constructor(private http: HttpClient) { }

    add(tipo): Observable<any> {
        return this.http.post(this.URL, tipo);
    }

    list(): Observable<Array<TipoRefresco>> {
        return this.http.get<Array<TipoRefresco>>(this.URL);
    }

    get() {}

    destroy(id: number): Observable<any> {
        return this.http.delete(`${this.URL}/${id}`);
    }

    update() {}

}
