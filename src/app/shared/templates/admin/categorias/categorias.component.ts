import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';

import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CategoriaRefresco } from '../../../models/categoria-refresco';
import { CategoriaRefrescoService } from '../../../services/categoria-refresco.service';

@Component({
    selector: 'f-categorias',
    templateUrl: './categorias.component.html',
    styleUrls: ['./categorias.component.sass']
})
export class CategoriasComponent implements OnInit {

    dataSource = new CategoriaDataSource(this.crService);
    displayedColumns = ['nombre', 'contenido', 'opciones'];
    form: FormGroup;
    errors: any = {
        'nombre': {
            'required': 'No debe estar vacio',
            'pattern': 'Dato incompatible'
        },
        'contenido': {
            'required': 'No debe estar vacio',
        },
    };

    constructor(
        private crService: CategoriaRefrescoService,
        private fb: FormBuilder,
        private router: Router,
    ) {
        this.createForm();
    }

    ngOnInit() {
    }

    createForm() {
        this.form = this.fb.group({
            nombre: [
                null,
                Validators.compose([
                    Validators.required,
                    Validators.maxLength(20),
                    Validators.pattern('[a-z-A-Z]+')
                ])
            ],
            contenido: [
                null,
                Validators.compose([
                    Validators.required
                ])
            ],
        });
    }

    editCategoria(id: number) {
        console.log(id);
    }

    destroyCategoria(id: number) {
        console.log(id);
        this.crService.destroy(id).subscribe(
            (val) => {
                console.log("DELETE call successful value returned in body", val);
            },
            response => {
                console.log("DELETE call in error", response);
            },
            () => {
                console.log("The DELETE observable is now completed.");
            }
        );
    }

    addCategoria(categoria) {
        console.log(categoria);
        this.crService.add(categoria).subscribe(
            (val) => {
                console.log("POST call successful value returned in body",val);
                this.router.navigate(['/admin']);
            },
            response => {
                console.log("POST call in error", response);
            },
            () => {
                console.log("The POST observable is now completed.");
            }
        );
    }

    getErrorNombre() {
        return (
            this.form.controls['nombre'].hasError('required') ?
            this.errors.nombre.required : 
            this.form.controls['nombre'].hasError('pattern') ?
            this.errors.nombre.pattern : 
            ''
        );
    }

    getErrorContenido() {
        return (
            this.form.controls['contenido'].hasError('required') ?
            this.errors.contenido.required : 
            ''
        );
    }

}

export class CategoriaDataSource extends DataSource<any> {

    constructor(private crService: CategoriaRefrescoService) {
        super();
    }

    connect(): Observable<CategoriaRefresco[]> {
        return this.crService.list();
    }

    disconnect() {}
}
