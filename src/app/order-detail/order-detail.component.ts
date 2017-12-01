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
    private orderlines: Detalle[];
    private total: number;
    private message: any;
    private subscription: Subscription;
    private observable: any;
    private counterDetalle: number;


    constructor(private messageService: MessageService) { 
        this.orderlines = [];
        this.total = 0;
        this.counterDetalle = 1;
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
            } else if(this.message.component == "orderline-delete") {
                console.log("eliminar");
                console.log(this.message.value);
                this.eliminarDetalle(this.message.value);
            
            }
        });
    }

    public eliminarDetalle(id: number): void {
        let encontrado = false;
        let indice = 0;
        let detalle: Detalle;
        while(!encontrado){
            detalle = this.orderlines[indice];
            if(detalle.getDetailID() == id){
                encontrado = true;
            } else {
                indice++; 
            }
        }
        if(indice == 0){
            this.orderlines.splice(indice,1);
        } else {
            this.orderlines.splice(indice,indice);
        
        }
    }

    public setOrderlineCollection(collection: any): void {
        this.orderlines = [];
        for(let item of collection){
            this.agregarOrderline(item);
        }
    }

    public agregarOrderline(detalle: Detalle): void {
        detalle.setDetailID(this.counterDetalle);
        console.log(this.counterDetalle);
        this.counterDetalle++;
        this.orderlines.push(detalle);
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

    public eliminarPedido(): void {
        this.orderlines = [];
    }

  ngOnInit() {
  }

}
