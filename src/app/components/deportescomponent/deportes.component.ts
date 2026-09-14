import { Component, ViewContainerRef } from "@angular/core";

@Component({
    selector: "deportes-component",
    standalone: false,
    templateUrl: "./deportes.component.html",
    styleUrl: "./deportes.component.css"
})

export class DeportesComponent {
    public sports: Array<string>;
    public numeros: Array<number>;
    constructor(){
        this.numeros = [8,5,7,3,22,44,11];
        this.sports = ["Canicas", "Curling", "Dardos", "Petanca", "Padel"];
    }
}