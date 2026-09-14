import { Component } from "@angular/core";

@Component ({
    selector: "forms-binding",
    standalone: false,
    templateUrl: "./forms.binding.html"
})

export class FormsBinding{
    public user: any;
    public mensaje: string;
    constructor(){
        this.mensaje = "";
        this.user = {
            nombre: "",
            apellidos: "",
            edad: 0
        }
    }

    recibirSubmit(): void{
        this.mensaje = "Datos recibidos correctamente";
    }
}