import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Plato } from '../models/plato';

@Injectable()
export class PlatoService {

    private URL: string = 'http://sistwo-b.com/api/platos';

    constructor(private http: HttpClient) { }

    getPlatos(): Observable<Plato[]> {
        return this.http.get<Plato[]>(this.URL);
    }

    addPlato(plato: any): Observable<any> {
        return this.http.post(this.URL, plato);
    }

    destroyPlato(plato_id: number): Observable<any> {
        return this.http.delete(`${this.URL}/${plato_id}`);
    }

    get(plato_id: number): Observable<Plato> {
        return this.http.get<Plato>(`${this.URL}/${plato_id}`);
    }

    update(plato: any): Observable<any> {
        return this.http.put(`${this.URL}/${plato.id}`, plato);
    }
    
}
