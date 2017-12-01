import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { MessageService } from '../shared/services/message.service';

import { Detalle } from '../shared/models/detalle';
import { Order } from '../shared/models/order';

@Component({
  selector: 'f-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.sass'],
  inputs: ['num']
})
export class OrderItemComponent implements OnInit {

    private order: Order;
    private message: any;
    private subscription: Subscription;
    private observable: any;
    @Input() num: number = 0;
    constructor(private messageService: MessageService) { 
        this.message = undefined;
        this.observable = this.messageService.getMessage();
        this.order = undefined;
        this.subscription = this.observable.subscribe( message => {
            this.message = message;
            if(message.component == "orderItem" && message.id == this.num){
                console.log("Is my Object =D"); 
                this.order = message.message;
            }

            if(message.component == "orderline-delete" && message.id == this.num){
                console.log("eliminar detalle"); 
                this.eliminarDetalle(message.value);
            }

            if(message.component == "orderline-add" && message.id == this.num){
                console.log("agregar detalle"); 
                this.agregarDetalle(message.message);
            }
        });
    }

    public agregarDetalle(detalle: Detalle): void {
        let listaDetalle: Detalle[]  = this.order.getListaDetalle();
        listaDetalle.push(detalle); 
    }

    public eliminarDetalle(id: number): void{
        let listaDetalle: Detalle[]  = this.order.getListaDetalle();
        let encontrado = false;
        let indice = 0;
        let detalle: Detalle;
        while(!encontrado){
            detalle = listaDetalle[indice];
            if(detalle.getDetailID() == id){
                encontrado = true;
            } else {
                indice++; 
            }
        }
        if(indice == 0){
            listaDetalle.splice(indice,1);
        } else {
            listaDetalle.splice(indice,indice);
        
        }

    
    }

    public actualizarDetalleUI(listaDetalle: Detalle[]): void {
        this.messageService.sendMessageOrderline("orderline",true,listaDetalle);
    }

    public enviarDetallesUI(): void {
        let listaDetalle: Detalle[]  = this.order.getListaDetalle();
        this.messageService.setCurrentOrderID(this.num);
        this.actualizarDetalleUI(listaDetalle); 
    }

    public sendMessage(message: any): void {
        this.messageService.sendMessage(message);
    }

    public showMessage(): void {
        console.log(this.message);
    }

    ngOnInit() { }

}
