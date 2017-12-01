import { Component, OnInit, Input } from '@angular/core';
import { Detalle } from './detalle';
import { Order } from './order';
import { MessageService } from '../message.service';
import { Subscription } from 'rxjs/Subscription';

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
        });
    }

    public actualizarDetalleUI(listaDetalle: Detalle[]): void {
        this.messageService.sendMessageOrderline("orderline",true,listaDetalle);
    }

    public enviarDetallesUI(): void {
        let listaDetalle: Detalle[]  = this.order.getListaDetalle();
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
