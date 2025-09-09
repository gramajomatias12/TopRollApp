export interface Login {
    correo: string;
    clave: string; 
}

export interface Usuario {
    nombre: string;
    correo: string;
    clave: string; 
}

export interface IPatProveedor {
    //id?: number; //Cod de proveedor
    //n?: string; //Descripción de proveedor
    // dir?: string; //Descripción de direccion
    // tel?: string; //Descripción de telefono
    // ema?: string; //Descripción de email
    cdProveedor?: number; //Cod de proveedor
    dsProveedor?: string; //Descripción de proveedor
    dsDireccion?: string; //Descripción de direccion
    dsTelefono?: string; //Descripción de telefono
    dsEmail?: string; //Descripción de email
    
}

export class PatProveedor implements IPatProveedor {
    //id?: number; //Cod de proveedor
    //n?: string; //Descripción de proveedor
    // dir?: string; //Descripción de direccion
    // tel?: string; //Descripción de telefono
    // ema?: string; //Descripción de email
    cdProveedor?: number; //Cod de proveedor
    dsProveedor?: string; //Descripción de proveedor
    dsDireccion?: string; //Descripción de direccion
    dsTelefono?: string; //Descripción de telefono
    dsEmail?: string; //Descripción de email
}

export interface IProducto {
    IdProducto?: number; //Cod de producto
    Nombre?: string; //Descripción de producto
    Precio?: number; //precio de producto
}
export class Producto implements IProducto {
    IdProducto?: number; //Cod de producto
    Nombre?: string; //Descripción de producto
    Precio?: number; //precio de producto
}


export interface ResponseAcceso {
    isSuccess: boolean,
    token: string;
}

export interface ResponseProducto{
    value: Producto[];
  }

