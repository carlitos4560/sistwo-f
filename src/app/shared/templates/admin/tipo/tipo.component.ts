import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';

import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { TipoRefresco } from '../../../models/tipo-refresco';
import { TipoRefrescoService } from '../../../services/tipo-refresco.service';

@Component({
  selector: 'f-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.sass']
})
export class TipoComponent implements OnInit {

    dataSource = new TipoDataSource(this.trService);
    displayedColumns = ['nombre', 'imagen', 'opciones'];
    form: FormGroup;
    @ViewChild('fileInput') fileInput: ElementRef;
    errors: any = {
        'nombre': {
            'required': 'No debe estar vacio',
            'pattern': 'Dato incompatible'
        },
        'imagen': {
            'required': 'Imagen es requerida',
        },
    };

    constructor(
        private trService: TipoRefrescoService,
        private fb: FormBuilder,
        private router: Router,
    ) {
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
                ])
            ],
            imagen: [
                null,
                Validators.compose([
                    Validators.required
                ])
            ],
        });
    }

    editTipo(id: number) {
        console.log(id);
    }

    destroyTipo(id: number) {
        console.log(id);
        this.trService.destroy(id).subscribe(
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

    addTipo(tipo) {
        console.log(tipo);
        this.trService.add(tipo).subscribe(
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

    getErrorImagen() {
        return (
            this.form.controls['imagen'].hasError('required') ?
            this.errors.imagen.required : 
            ''
        );
    }

}

export class TipoDataSource extends DataSource<any> {

    constructor(private trService: TipoRefrescoService) {
        super();
    }

    connect(): Observable<TipoRefresco[]> {
        return this.trService.list();
    }

    disconnect() {}
}
