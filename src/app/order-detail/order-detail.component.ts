import { Component, OnInit } from '@angular/core';
import { Detalle } from '../order-item/detalle';
import { OrderlineComponent } from '../orderline/orderline.component';
import { MessageService } from '../message.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'f-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.sass']
})
export class OrderDetailComponent implements OnInit {
    private orderlines: OrderlineComponent[];
    private total: number;
    private message: any;
    private subscription: Subscription;
    private observable: any;


    constructor(private messageService: MessageService) { 
        this.orderlines = [];
        this.total = 0;
        this.message = undefined;
        this.observable = this.messageService.getMessage();
        this.subscription = this.observable.subscribe( message => {
            this.message = message;
            if(this.message.component == "orderline"){
                if(this.message.isCollection){
                    this.setOrderlineCollection(message.message);
                } else {
                    this.agregarOrderline(message.message);
                    this.checkOrderlines(); 
                }
            }
        });
    }

    public setOrderlineCollection(collection: any): void {
        this.orderlines = [];
        for(let item of collection){
            this.agregarOrderline(item);
        }
    }

    public agregarOrderline(detalle: Detalle): void {
        let desc = detalle.getDescripcion();
        let cant = detalle.getCantidad();
        let cost = detalle.getCosto();
        console.log(desc);
        console.log(cant);
        console.log(cost);

        let orderLineComponent = new OrderlineComponent();
        orderLineComponent.initializeComponent(desc,cant,cost);
        this.orderlines.push(orderLineComponent);
    }

    public sendMessage(message: string): void {
        this.messageService.sendMessage(message);
    }

    public checkOrderlines(): void {
        for (let orderline of this.orderlines){
            console.log(orderline);
        }
    }

    public showMessage(): void {
        console.log(this.message);
    }

  ngOnInit() {
  }

}
