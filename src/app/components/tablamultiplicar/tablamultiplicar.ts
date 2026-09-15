import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tablamultiplicar',
  standalone: false,
  styleUrl: './tablamultiplicar.css',
  templateUrl: './tablamultiplicar.html',
})
export class Tablamultiplicar {
  @ViewChild("cajanumero") cajaNumero!:ElementRef;
  public numero: number;
  public numeros: Array<number>;

  constructor() {
    this.numero = 0;
    this.numeros = new Array<number>();
  }

  mostrarTabla(): void {
    this.numero = parseInt(this.cajaNumero.nativeElement.value);
    console.log(this.numero)
    let aux = new Array<number>();
    for (let i = 1; i <= 10; i++){
      var op = this.numero * i;
      aux.push(op);
    }
    this.numeros = aux;
  }
}
