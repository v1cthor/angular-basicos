export interface Producto {
    desc: string;
    precio: number;
}

export function calculaISV(productos: Producto[]): [number, number] {
    let total = 0;
    //se hace un foreach de los precios y los acumula en total
    productos.forEach(({ precio }) => {
        total += precio;
    });
    return [total, total * 0.15];
}