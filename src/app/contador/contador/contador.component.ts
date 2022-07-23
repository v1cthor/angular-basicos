import { Component } from "@angular/core";
@Component({
    selector: 'app-contador',
    template: `
    <h1>{{title}}</h1>


<button (click)="acumular(1)"> + 1</button>
<span>{{numero}}</span>
<button (click)="acumular(-1)"> - 1</button>
<hr>

<h3>la base es: <strong>{{base}}</strong></h3>

<button (click)="acumular( base)"> + {{base}}</button>
<span>{{numero}}</span>
<button (click)="acumular( -base)"> - {{base}}</button>`
})

export class ContadorComponent {

    title: string = 'Contador app';
    numero: number = 10;
    base: number = 5;

    //metodo
    acumular(valor: number) {
        this.numero += valor;
    }

}