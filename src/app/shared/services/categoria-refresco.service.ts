import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { CategoriaRefresco } from '../models/categoria-refresco';

@Injectable()
export class CategoriaRefrescoService {
    
    private URL: string = 'http://sistwo-b.com/api/refrescos/categorias';

    constructor(private http: HttpClient) { }

    add(categoria): Observable<any> {
        return this.http.post(this.URL, categoria);
    }

    list(): Observable<Array<CategoriaRefresco>> {
        return this.http.get<Array<CategoriaRefresco>>(this.URL);
    }

    get() {}

    destroy(id: number): Observable<any> {
        return this.http.delete(`${this.URL}/${id}`);
    }

    update() {}

}
