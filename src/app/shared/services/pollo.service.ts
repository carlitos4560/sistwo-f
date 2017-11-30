import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Pollo } from '../models/pollo';

@Injectable()
export class PolloService {
    
    private URL: string = 'http://sistwo-b.com/api/pollos';

    constructor(private http: HttpClient) { }

    addPollo(pollo: Pollo): Observable<any> {
        return this.http.post(this.URL, pollo);
    }

}
