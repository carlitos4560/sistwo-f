import { Detalle } from './detalle';
export class Order {
    private numeroPedido: number;
    private clienteID: number;
    private listaDetalle: Detalle[];

    constructor(){
        this.listaDetalle = []; 
    }

    public setCliente(id: number): void {
        this.clienteID = id;
    }

    public agregarDetalle(nom: string, cant: number, price: number): void {
        let detalle = new Detalle(nom,cant,price);
        this.listaDetalle.push(detalle);    
    }

    public setNumeroPedido(num: number): void {
        this.numeroPedido = num;
     
    }

    public getNumeroPedido(): number {
        return this.numeroPedido;
    }

    public getListaDetalle(): Detalle[] {
        return this.listaDetalle;
    
    }


}
