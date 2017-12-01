import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MessageService {
    private subject = new Subject<any>();
    private currentOrderId: number;

    constructor() { }

    public sendMessage(message: any): void { 
        this.subject.next({ message });
    }

    public sendMessageOrderItem(component: string,id: number, message: any): void{
        this.subject.next({
            component: component,
            id: id, 
            message: message
        });
    }

    public sendMessageOrderline(component: string, isCollection: boolean, message: any): void {
        this.subject.next({
            component: component,
            isCollection: isCollection, 
            message: message
        }); 
    }

    public sendMessageDetailDelete(component: string, value: number,id: number){
        this.subject.next({component: component, value: value, id: id});
    
    }

    public setCurrentOrderID(id: number): void {
        this.currentOrderId = id;
    }

    public getCurrentOrderID(): number {
        return this.currentOrderId;
    }

    public clearMessage(): void {
        this.subject.next();
    
    }

    public getMessage(): Observable<any> {
        return this.subject.asObservable();
    
    }
}
