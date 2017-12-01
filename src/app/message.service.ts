import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MessageService {
    private subject = new Subject<any>();

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

    public clearMessage(): void {
        this.subject.next();
    
    }

    public getMessage(): Observable<any> {
        return this.subject.asObservable();
    
    }
}
