import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'f-orderline',
  templateUrl: './orderline.component.html',
  styleUrls: ['./orderline.component.sass'],
  inputs: ['cant','desc']
})
export class OrderlineComponent implements OnInit {
    private descripcion: string;
    private cantidad: number;
    private precio: number;
    @Input() cant: number = 0; desc: string = "";
    constructor(){
        this.descripcion = "";
        this.cantidad = 0;
        this.precio = 0;
    }

    public initializeComponent(desc: string, cant: number, cost: number): void { 
        this.descripcion = desc;
        this.cantidad = cant;
        this.precio = cost;
    }

    public getDescripcion(): string {
        return this.descripcion;
    }
    public getCantidad(): number {
        return this.cantidad;
    }
    public getPrecio(): number {
        return this.precio;
    }



  ngOnInit() {
  }

}
