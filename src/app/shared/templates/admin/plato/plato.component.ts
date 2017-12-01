import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Plato } from '../../../models/plato';
import { PlatoService } from '../../../services/plato.service';

@Component({
    selector: 'plato',
    templateUrl: './plato.component.html',
    styleUrls: ['./plato.component.sass']
})
export class PlatoComponent implements OnInit {

    form: FormGroup;
    @ViewChild('fileInput') fileInput: ElementRef;
    object: Plato;
    errors: any = {
        'nombre': {
            'required': 'No debe estar vacio',
            'pattern': 'Dato incompatible'
        },
        'precio': {
            'required': 'No debe estar vacio',
            'pattern': 'Dato incompatible'
        },
        'porcion': {
            'required': 'No debe estar vacio',
            'pattern': 'Solo valores 1 o 2 o 4 o 8'
        },
        'descripcion': {
            'required': 'No debe estar vacio',
            'min': 'Minimo 15 caracteres',
            'max': 'Maximo 255 caracteres'
        },
        'imagen': {
            'required': 'Imagen es requerido'
        },
    };

    constructor(
        private fb: FormBuilder,
        private platoService: PlatoService,
        private router: Router) {
        this.createForm();
    }

    ngOnInit() {
    }

    onFileChange(event) {
        let reader = new FileReader();
        if(event.target.files && event.target.files.length > 0) {
            let file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.form.get('imagen').setValue({
                    filename: file.name,
                    filetype: file.type,
                    value: reader.result.split(',')[1]
                })
            };
        }
    }

    clearFile() {
        this.form.get('imagen').setValue(null);
        this.fileInput.nativeElement.value = '';
    }

    createForm() {
        this.form = this.fb.group({
            nombre: [
                null,
                Validators.compose([
                    Validators.required,
                    Validators.maxLength(20),
                    Validators.pattern('[a-z-A-Z]+')
                ]
            )],
            precio: [
                null,
                Validators.compose([
                    Validators.required,
                    Validators.pattern('[0-9]+')
                ]
            )],
            porcion: [
                null,
                Validators.compose([
                    Validators.required,
                    Validators.pattern('[1|2|4|8]{1}')
                ])
            ],
            descripcion: [
                null,
                Validators.compose([
                    Validators.required,
                    Validators.minLength(15),
                    Validators.maxLength(255)
                ])
            ],
            imagen: [null, Validators.compose([Validators.required])],
        });
    }

    addPlato(plato) {
        this.platoService.addPlato(plato).subscribe(
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

    getErrorPrecio() {
        return (
            this.form.controls['precio'].hasError('required') ?
            this.errors.precio.required :
            this.form.controls['precio'].hasError('pattern') ?
            this.errors.precio.pattern : 
            ''
        );
    }

    getErrorPorcion() {
        return (
            this.form.controls['porcion'].hasError('required') ?
            this.errors.porcion.required :
            this.form.controls['porcion'].hasError('pattern') ?
            this.errors.porcion.pattern :
            ''
        );
    }

    getErrorDescripcion() {
        return (
            this.form.controls['descripcion'].hasError('required') ?
            this.errors.descripcion.required : 
            this.form.controls['descripcion'].hasError('minLength') ?
            this.errors.descripcion.min :
            this.form.controls['descripcion'].hasError('maxLength') ?
            this.errors.descripcion.max :
            ''
        );
    }

    getErrorImagen() {
        return (
            this.form.controls['imagen'].hasError('required') ?
            this.errors.imagen.required :
            ''
        );
    }

}
