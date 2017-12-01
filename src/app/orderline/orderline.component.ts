import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../message.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'f-orderline',
  templateUrl: './orderline.component.html',
  styleUrls: ['./orderline.component.sass'],
  inputs: ['cant','desc','detailID']
})
export class OrderlineComponent implements OnInit {

    private message: any;
    private subscription: Subscription;
    private observable: any;
    @Input() 
    cant: number = 0; 
    desc: string = ""; 
    detailID: number = 0;
    constructor(private messageService: MessageService){
        this.message = undefined;
        this.observable = this.messageService.getMessage();
        this.subscription = this.observable.subscribe( 
            message => {
                this.message = message;
            }
        );
    }

    public getDescripcion(): string {
        return this.desc;
    }

    public getCantidad(): number {
        return this.cant;
    }

    public getDetailID(): number {
        return this.detailID;
    }

    public eliminarDetalle(): void {
        console.log(this.detailID);
        this.messageService.sendMessageDetailDelete("orderline-delete",this.detailID,this.messageService.getCurrentOrderID());
    
    }

    ngOnInit() {
    }

}
