export interface IPatProveedor {
    id?: number; //Cod de proveedor
    n?: string; //Descripción de proveedor
    dir?: string; //Descripción de direccion
    tel?: string; //Descripción de telefono
    ema?: string; //Descripción de email
}

export class PatProveedor implements IPatProveedor {
    id?: number; //Cod de proveedor
    n?: string; //Descripción de proveedor
    dir?: string; //Descripción de direccion
    tel?: string; //Descripción de telefono
    ema?: string; //Descripción de email
}