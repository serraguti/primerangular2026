import { Component } from "@angular/core";
import { ViewChild, ElementRef } from "@angular/core";

@Component({
    selector: "forms-object-model",
    standalone: false,
    templateUrl: "./forms.object.model.html"
})

export class FormsObjectModel{
    public numeros: Array<number>;
    @ViewChild("cajanumero1") cajaNumero1Ref!: ElementRef;
    @ViewChild("cajanumero2") cajaNumero2Ref!: ElementRef;
    public suma: number;
    constructor(){
        this.numeros = [2,3,4,5]
        this.suma = 0;
    }

    generarNumero(): void{
        this.numeros.push(this.cajaNumero1Ref.nativeElement.value);
    }

    sumarNumeros(): void {
        let num1 = this.cajaNumero1Ref.nativeElement.value;
        let num2 = this.cajaNumero2Ref.nativeElement.value;
        this.suma = parseInt(num1) + parseInt(num2);
    }
}