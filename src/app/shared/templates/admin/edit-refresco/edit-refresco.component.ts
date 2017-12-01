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
    selector: 'f-edit-refresco',
    templateUrl: './edit-refresco.component.html',
    styleUrls: ['./edit-refresco.component.sass']
})
export class EditRefrescoComponent implements OnInit {

    form: FormGroup;
    categorias: Array<CategoriaRefresco>;
    tipos: Array<TipoRefresco>;

    errors: any = {};
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
                console.log("DELETE GET successful value returned in body", val);
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
                    Validators.required
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


    updateRefresco(refresco) {
        console.log(refresco);
    }
}