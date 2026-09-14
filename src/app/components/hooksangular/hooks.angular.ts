import { Component, OnInit } from "@angular/core";

@Component ({
    selector: "hooks-angular",
    standalone: false,
    templateUrl: "./hooks.angular.html"
})

export class HooksAngular implements OnInit{
    public mensaje: string;
    constructor(){
        this.mensaje = "Viendo Angular Hooks";
        console.log("Ejecutando constructor");
    }

    //METODO MANUAL PARA UN EVENTO
    cambiarMensaje(): void{
        this.mensaje = "Has pulsado un boton!!!";
    }

    //EL METODO OnInit SE UTILIZA PARA TRATAR LAS VARIABLES
    ngOnInit(): void {
        console.log("Ejecutando método OnInit");
    }
    ngDoCheck(): void{
        console.log("Método DoCheck cambiando la página");
    }
}