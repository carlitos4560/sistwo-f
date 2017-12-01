import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Pollo } from '../../../models/pollo';
import { PolloService } from '../../../services/pollo.service';

@Component({
    selector: 'pollo',
    templateUrl: './pollo.component.html',
    styleUrls: ['./pollo.component.sass']
})
export class PolloComponent implements OnInit {

    form: FormGroup;
    errors: any = {
        'cantidad': {
            'required': 'Este campo es requerido'
        },
        'fecha': {
            'required': 'Este campo es requerido',
            'pattern': 'ERROR PATTERN'
        }
    };

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private polloService: PolloService
    ) {
        this.createForm();
    }

    ngOnInit() {
    }

    createForm() {
        this.form = this.fb.group({
            cantidad_porciones: [
                null,
                Validators.compose([
                    Validators.required
                ]
            )],
            fecha: [
                null,
                Validators.compose([
                    Validators.required,
                ]
            )],
        });
    }

    addPollo(pollo: Pollo) {
        this.polloService.addPollo(pollo).subscribe(
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
        console.log(pollo);
    }

    getErrorCantidad() {
        return (
            this.form.controls['cantidad_porciones'].hasError('required') ?
            this.errors.cantidad.required : 
            ''
        );
    }

    getErrorFecha() {
        return (
            this.form.controls['fecha'].hasError('required') ?
            this.errors.fecha.required : 
            ''
        );
    }

}
