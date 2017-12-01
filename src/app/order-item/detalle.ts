export class Detalle {
    private cantidad: number;
    private descripcion: string;
    private costo: number;
    private productID: number;
    private detailID: number;

    constructor(desc: string, cant: number, precio: number){
        this.descripcion = desc;
        this.cantidad = cant;
        this.costo = precio;
    }

    public getCantidad(): number {
        return this.cantidad;
    }

    public getCosto(): number {
        return this.costo;
    }

    public getProductID(): number {
        return this.productID;
    }

    public getDescripcion(): string {
        return this.descripcion;
    }

    public setCantidad(cant: number): void {
        this.cantidad = cant;
    }

    public setCosto(cost: number): void {
        this.costo = cost;
    }

    public setDescripcion(desc: string): void {
        this.descripcion = desc;
    }

    public setProductID(id: number): void {
        this.productID = id;
    }

    public setDetailID(id: number): void {
        this.detailID = id;
    }
    public getDetailID(): number {
        return this.detailID;
    }


}
