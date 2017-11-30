import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Refresco } from '../models/refresco';

@Injectable()
export class RefrescoService {

    private URL: string = 'http://sistwo-b.com/api/refrescos/r';

    constructor(private http: HttpClient) { }

    add(refresco): Observable<any>{
        return this.http.post(this.URL, refresco);
    }

    list(): Observable<Array<Refresco>> {
        return this.http.get<Array<Refresco>>(this.URL);
    }

    get() {
    }

    destroy(id: number): Observable<any> {
        return this.http.delete(`${this.URL}/${id}`);
    }

    update() {
    }

}
