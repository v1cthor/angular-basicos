import { Component } from '@angular/core';
import { Producto, calculaISV } from './interacess';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  ngOnInit(): void {
    // console.log('tipos basicos ***********************************************************');
    // //tipos basicos********************************************************************************
    // let nombre: string = 'Strider';
    // let hp: number | string = 95;

    // hp = 'full';

    // console.log(nombre, hp);
    // console.log('***********************************************************');
    // console.log('arreglos objetos interface ***********************************************************');
    // //tipos basicos********************************************************************************

    // //arreglos objetos interface********************************************************************************
    // let habilidades: string[] = ['bash', 'counter', 'healing'];

    // interface Personaje {
    //   nombre: string;
    //   hp: number;
    //   habilidades: string[];
    //   pueblonat?: string;
    // }

    // const personaje: Personaje = {
    //   nombre: 'striker',
    //   hp: 100,
    //   habilidades: ['bash', 'counter', 'healing']
    // }

    // personaje.pueblonat = 'pueblo paleta'

    // console.table(personaje);
    // console.log('***********************************************************');

    // //arreglos objetos interface********************************************************************************

    // //funciones********************************************************************************
    // console.log('funciones ***********************************************************');
    // function sumar(a: number, b: number): number {
    //   return a + b;
    // }

    // const sumarflecha = (a: number, b: number): number => {
    //   return a + b;
    // }

    // function multiplicar(numero: number, otronumero?: number, base: number = 2): number {
    //   return numero * base;
    // }

    // const resultado = multiplicar(5, 0, 10);

    // console.log(resultado);

    // console.log('***********************************************************');
    // console.log('funciones ***********************************************************');


    // interface PeronajeLOR {
    //   nombre: string;
    //   pv: number;
    //   mostrarHp: () => void;
    // }

    // function curar(personaje: PeronajeLOR, curarX: number): void {
    //   personaje.pv += curarX;
    //   console.log(personaje);
    // }

    // const nuevoPerosnaje: PeronajeLOR = {
    //   nombre: 'Strider',
    //   pv: 50,
    //   mostrarHp() {
    //     console.log('puntos de vida', this.pv);
    //   }
    // }

    // curar(nuevoPerosnaje, 20);
    // nuevoPerosnaje.mostrarHp();

    // console.log('***********************************************************');
    // console.log('tipado tarea ***********************************************************');
    // console.log(' ');



    // interface SuperHeroe {
    //   nombre: string;
    //   edad: number;
    //   direccion: Direccion;
    //   mostrarDireccion: () => string;
    // }

    // interface Direccion {
    //   calle: string;
    //   pais: string;
    //   ciudad: string;
    // }

    // const superHeroe: SuperHeroe = {
    //   nombre: 'Spiderman',
    //   edad: 30,
    //   direccion: {
    //     calle: 'Main ST',
    //     pais: 'USA',
    //     ciudad: 'NY'
    //   },
    //   mostrarDireccion() {
    //     return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    //   }
    // }

    // const direccion = superHeroe.mostrarDireccion();
    // console.log(direccion);

    // console.log('***********************************************************');
    // console.log('Desestructuración de Objetos ***********************************************************');
    // console.log(' ');

    // interface Reproductor {
    //   volumen: number;
    //   segundo: number;
    //   cancion: string;
    //   detalles: Detalles;
    // }
    // interface Detalles {
    //   autor: string;
    //   anio: number;
    // }

    // const reproductor: Reproductor = {
    //   volumen: 90,
    //   segundo: 36,
    //   cancion: 'Mess',
    //   detalles: {
    //     autor: 'Ed Sheed',
    //     anio: 2015
    //   }
    // }

    // const { volumen, segundo, cancion, detalles } = reproductor;
    // const { autor } = detalles;

    // // console.log('El volumen actual de: ', volumen);
    // // console.log('El segundo actual de: ',segundo );
    // // console.log('La cancion actual de: ', cancion );
    // // console.log('El autor es:', autor);

    // const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

    // const [p1, p2, p3] = dbz;

    // console.log('personaje 1: ', p1);
    // console.log('personaje 2: ', p2);
    // console.log('personaje 3: ', p3);

    // console.log('***********************************************************');
    // console.log('Desestructuración de argumentos ***********************************************************');
    // console.log(' ');

    // //se establecen las variables y productos
    // interface Producto {
    //   desc: string;
    //   precio: number;
    // }

    // const telefono: Producto = {
    //   desc: 'Nokia A1',
    //   precio: 150
    // }

    // const tableta: Producto = {
    //   desc: 'iPad Air',
    //   precio: 350
    // }
    // //se crea una funcion que se usa hasta que se manda a llamar
    // function calculaISV(productos: Producto[]): [number, number] {
    //   let total = 0;
    //   //se hace un foreach de los precios y los acumula en total
    //   productos.forEach(({ precio }) => {
    //     total += precio;
    //   });
    //   return [total, total * 0.15];
    // }
    // // se acumula los articulos en una variable
    // const articulos = [telefono, tableta];
    // //manda a llamar la funcion con la variable anterior que contiene los articulos
    // const [total, isv] = calculaISV(articulos);
    // console.log('total: ', total);
    // console.log('ISV: ', isv);

    // this.import_export();
    // this.clases_basicas();
    // this.genericos();
    // this.decoradores_clases();
    // this.encadenamiento();
  }

  // import_export() {
  //   console.log('***********************************************************');
  //   console.log(' Importaciones y exportaciones ***********************************************************');
  //   console.log(' ');


  //   const carritoCompras: Producto[] = [
  //     {
  //       desc: 'telefono 1',
  //       precio: 100
  //     },
  //     {
  //       desc: 'telefono 2',
  //       precio: 150
  //     }
  //   ];

  //   const [total, isv] = calculaISV(carritoCompras);

  //   console.log('total', total);
  //   console.log('ISV', isv);
  // }

  // clases_basicas() {
  //   console.log('***********************************************************');
  //   console.log(' clases basicas ***********************************************************');
  //   console.log(' ');
  //   //basico
  //   // class Heroe {
  //   //   constructor(
  //   //     public alterEgo: string,
  //   //     public edad: number,
  //   //     public nombreReal: string
  //   //   ) { }
  //   // }
  //   // const ironman = new Heroe('Ironman', 45, 'Tony');
  //   // console.log(ironman);


  //   class PersonaNormal {
  //     constructor(
  //       public nombre: string,
  //       public direccion: string
  //     ) { }

  //   }

  //   class Heroe extends PersonaNormal {
  //     constructor(
  //       public alterEgo: string,
  //       public edad: number,
  //       public nombreReal: string
  //     ) {
  //       super(nombreReal, 'New York, USA');
  //     }
  //   }
  //   const ironman = new Heroe('Ironman', 45, 'Tony');
  //   console.log(ironman);
  // }

  // genericos() {
  //   console.log('***********************************************************');
  //   console.log(' genericos ***********************************************************');
  //   console.log(' ');

  //   function queTipoSoy<T>(argumento: T) {
  //     return argumento;
  //   }

  //   let soyString = queTipoSoy('Hola mundo');
  //   let soyNumero = queTipoSoy(100);
  //   let soyArreglo = queTipoSoy([1, 2, 3, 4, 5]);

  //   let soyExplicito = queTipoSoy<number>(100);
  // }

  // decoradores_clases() {
  //   console.log('***********************************************************');
  //   console.log(' decoradores de clases ***********************************************************');
  //   console.log(' ');

  //   class MiSuperClase {
  //     public miPropiedad: string = 'ABC123';

  //     imprimir() {
  //       console.log('hola mundo');
  //     }
  //   }

  //   console.log(MiSuperClase);

  //   const miClase = new MiSuperClase();

  //   console.log(miClase.miPropiedad);
  // }

  // encadenamiento() {
  //   console.log('***********************************************************');
  //   console.log(' encadenamiento ***********************************************************');
  //   console.log(' ');
  //   interface Pasajero {
  //     nombre: string;
  //     hijos?: string[]
  //   }

  //   const pasajero1: Pasajero = {
  //     nombre: 'Fernando'
  //   }

  //   const pasajero2: Pasajero = {
  //     nombre: 'Melissa',
  //     hijos: ['Natalia', 'Gabriel']
  //   }

  //   function imprimeHijos(pasajero: Pasajero): void {
  //     const cuantosHijos = pasajero.hijos?.length || 0;

  //     console.log(cuantosHijos);
  //   }

  //   imprimeHijos(pasajero1);
  // }

}
