import { Component } from "@angular/core";

@Component({
    selector: "deportes-component",
    standalone: false,
    templateUrl: "./deportes.component.html"
})

export class DeportesComponent {
    public sports: Array<string>;
    constructor(){
        this.sports = ["Canicas", "Curling", "Dardos", "Petanca", "Padel"];
    }
}