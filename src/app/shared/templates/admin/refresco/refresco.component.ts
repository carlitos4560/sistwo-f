import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CategoriaRefresco } from '../../../models/categoria-refresco';
import { CategoriaRefrescoService } from '../../../services/categoria-refresco.service';

import { TipoRefresco } from '../../../models/tipo-refresco';
import { TipoRefrescoService } from '../../../services/tipo-refresco.service';

import { Refresco } from '../../../models/refresco';
import { RefrescoService } from '../../../services/refresco.service';

@Component({
    selector: 'refresco',
    templateUrl: './refresco.component.html',
    styleUrls: ['./refresco.component.sass']
})
export class RefrescoComponent implements OnInit {

    form: FormGroup;
    categorias: Array<CategoriaRefresco>;
    tipos: Array<TipoRefresco>;
    errors: any = {
        'precio': {
            'required': 'No debe estar vacio',
            'pattern': 'Dato incompatible'
        },
        'cantidad': {
            'required': 'No debe estar vacio',
        },
        'categoria': {
            'required': 'Seleccione una opcion',
        },
        'tipo': {
            'required': 'Seleccione una opcion',
        },
    };

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private tr: TipoRefrescoService,
        private cr: CategoriaRefrescoService,
        private refrescoService: RefrescoService,
    ) {
        this.createForm();
    }

    ngOnInit() {
        this.cr.list().subscribe(
            (val) => {
                console.log("GET call successful value returned in body", val);
                this.categorias = val;
            },
            response => {
                console.log("GET call in error", response);
            },
            () => {
                console.log("The GET observable is now completed.");
            }
        );

        this.tr.list().subscribe(
            (val) => {
                console.log("GET successful value returned in body", val);
                this.tipos = val;
            },
            response => {
                console.log("GET call in error", response);
            },
            () => {
                console.log("The GET observable is now completed.");
            }
        );
    }

    createForm() {
        this.form = this.fb.group({
            categoria_refresco_id: [null, Validators.compose([Validators.required])],
            tipo_refresco_id: [null, Validators.compose([Validators.required])],
            precio: [
                null,
                Validators.compose([
                    Validators.required,
                    Validators.pattern('[0-9]+')
                ])
            ],
            cantidad_unidades: [
                null,
                Validators.compose([
                    Validators.required
                ])
            ],
        });
    }

    addRefresco(refresco) {
        this.refrescoService.add(refresco).subscribe(
            (val) => {
                console.log("POST call successful value returned in body",val);
                this.router.navigate(['/admin']);
            },
            response => {
                console.log("POST call in error", response);
            },
            () => {
                console.log("The POST observable is now completed.");
            },
        );
    }

    getErrorPrecio() {
        return (
            this.form.controls['precio'].hasError('required') ?
            this.errors.precio.required :
            this.form.controls['precio'].hasError('pattern') ?
            this.errors.precio.pattern : 
            ''
        );
    }

    getErrorCantidad() {
        return (
            this.form.controls['cantidad_unidades'].hasError('required') ?
            this.errors.precio.required :
            ''
        );
    }

    getErrorCategoria() {
        return (
            this.form.controls['categoria_refresco_id'].hasError('required') ?
            this.errors.categoria.required :
            ''
        );
    }

    getErrorTipo() {
        return (
            this.form.controls['tipo_refresco_id'].hasError('required') ?
            this.errors.tipo.required :
            ''
        );
    }
}
