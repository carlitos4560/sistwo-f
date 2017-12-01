import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { OrderItemComponent } from '../order-item/order-item.component';

import { MessageService } from '../shared/services/message.service';
import { Order } from '../shared/models/order';

@Component({
  selector: 'f-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.sass']
})
export class OrderComponent implements OnInit {
    
    private orderlist: Order[];
    private currentOrder: Order;
    private counterPedido: number;
    private message: any;
    private subscription: Subscription;
    private observable: any;

    constructor(private messageService: MessageService) {
        this.orderlist = [];
        this.currentOrder = undefined;
        this.counterPedido = 1;
        this.message = undefined;
        this.observable = this.messageService.getMessage();
        this.subscription = this.observable.subscribe( message => {
            this.message = message;
        });
        console.log("OrderComponent Initialized");
        this.crearPedidoDemo();
    }

    public crearPedidoDemo(): void{
        let pedido1 = this.crearPedido();
        let pedido2 = this.crearPedido();
        let pedido3 = this.crearPedido();
        pedido1.setCliente(1);
        pedido2.setCliente(2);
        pedido3.setCliente(3);
        pedido1.agregarDetalle("Economico",2,10);
        pedido1.agregarDetalle("Cocacola",2,10);
        pedido2.agregarDetalle("Pollo Entero",1,10);
        pedido2.agregarDetalle("Sprite",1,10);
        pedido3.agregarDetalle("Medio Pollo",1,10);
        pedido3.agregarDetalle("Cocacola Mini",1,2);
        setTimeout(() => this.messageService.sendMessageOrderItem("orderItem",pedido1.getNumeroPedido(),pedido1), 500);
        setTimeout(() => this.messageService.sendMessageOrderItem("orderItem",pedido2.getNumeroPedido(),pedido2), 500);
        setTimeout(() => this.messageService.sendMessageOrderItem("orderItem",pedido3.getNumeroPedido(),pedido3), 500);
 
    }

    public crearPedido(): Order {
        let order: Order = new Order();
        this.currentOrder = order;
        order.setNumeroPedido(this.counterPedido);
        this.counterPedido++;
        this.orderlist.push(order);
        return order;
    }

    public setCliente(id: number): void {
        this.currentOrder.setCliente(id);
    }



  ngOnInit() {
  }

}
