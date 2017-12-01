import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Plato } from '../../../models/plato';
import { PlatoService } from '../../../services/plato.service';
import { BetweenService } from '../../../services/between.service';

@Component({
    selector: 'f-edit-plato',
    templateUrl: './edit-plato.component.html',
    styleUrls: ['./edit-plato.component.sass']
})
export class EditPlatoComponent implements OnInit {

    model: any;
    //plato: Observable<any>;
    vistaEdit: any;

    plato_id: any;
    plato_nombre: any;
    plato_porcion: any;
    plato_precio: any;
    plato_descripcion: any;
    plato_imagen: any;

    form: FormGroup;
    @ViewChild('fileInput') fileInput: ElementRef;
    object: Plato;
    errors: any = {
        'nombre': {
            'required': 'Este campo es requerido'
        },
        'precio': {
            'required': 'Este campo es requerido'
        },
        'porcion': {
            'required': 'Este campo es requerido',
            'pattern': 'Solo valores 1 o 2 o 4 o 8'
        },
        'descripcion': {
            'required': 'Este campo es requerido',
            'min': 'Minimo 25 caracteres',
            'max': 'Maximo 255 caracteres'
        }
    };

    constructor(
        private fb: FormBuilder,
        private platoService: PlatoService,
        private router: Router,
        private bs: BetweenService
    ) {
        console.log("desde el constructor ");
    }

    ngOnInit() {
        this.bs.currentVista.subscribe(vistaEdit => this.vistaEdit = vistaEdit);
        if (this.vistaEdit.model != undefined) {
            console.log("creando form con modelo "+this.vistaEdit.model);
            this.model = this.vistaEdit.model;
            this.platoService.get(this.model).subscribe(
                (val) => {
                    console.log("GET call successful value returned in body", val);
                    this.plato_id = val.id;
                    this.plato_nombre = val.nombre;
                    this.plato_porcion = val.porcion;
                    this.plato_precio = val.precio;
                    this.plato_descripcion = val.descripcion;
                    this.plato_imagen = val.imagen;
                },
                response => {
                    console.log("GET call in error", response);
                },
                () => {
                    console.log("The GET observable is now completed.");
                }
            );
            console.log("desde el OnINIT ");
            this.createForm();
        }
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
            nombre: [null, Validators.compose([Validators.required])],
            precio: [null, Validators.compose([Validators.required])],
            porcion: [
                null,
                Validators.compose([
                    Validators.required,
                    Validators.pattern('1|2|4|8')
                ])
            ],
            descripcion: [
                null,
                Validators.compose([
                    Validators.required,
                    Validators.minLength(25),
                    Validators.maxLength(255)
                ])
            ],
        });
    }

    getErrorNombre() {
        return (
            this.form.controls['nombre'].hasError('required') ?
            this.errors.nombre.required : 
            ''
        );
    }

    getErrorPrecio() {
        return (
            this.form.controls['precio'].hasError('required') ?
            this.errors.precio.required :
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

    updatePlato(plato: Plato) {
        plato.id = this.plato_id;
        this.platoService.update(plato).subscribe(
            (val) => {
                console.log("UPDATE call successful value returned in body",val);
                this.router.navigate(['/']);
            },
            response => {
                console.log("UPDATE call in error", response);
            },
            () => {
                console.log("The UPDATE observable is now completed.");
            }
        );
        console.log(plato);
    }
}
