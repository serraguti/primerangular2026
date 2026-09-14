import { Component } from "@angular/core";

//UN COMPONENT DEBE DECLARAR QUE ES LO QUE UTILIZA
@Component({
    //NOMBRE DEL COMPONENT
    selector: "primer-component",
    standalone: false,
    //POR AHORA NO VOY A UTILIZAR HTML SEPARADO
    templateUrl: "./primer.component.html",
    styleUrls: ["./primer.component.css"]
})
//CADA COMPONENT SIEMPRE TENDRA UNA CLASE DONDE 
//ESTARAN LAS VARIABLES A UTILIZAR
//DEPENDIENDO DE LA VERSION, ME OBLIGA A QUE LA 
//CLASE TENGA DOS PALABRAS
export class PrimerComponent{
    //LAS VARIABLES TIENEN TIPADO MEDIANTE TYPESCRIPT
    //TAMBIEN PODEMOS INDICAR SI SON PUBLICAS O PRIVADAS
    //SI DESEAMOS QUE SEAN DIBUJADAS EN LA PAGINA
    //DEBEN SER PUBLICAS
    public saludo: string;
    public year: number;
    //LAS VARIABLES DEBEN SER INICIALIZADAS A LA FUERZA
    //DENTRO DE ANGULAR.
    //PARA ELLO TENEMOS UN CONSTRUCTOR QUE ES EL QUE 
    //SE UTILIZA PARA LA INICIALIZACION
    constructor(){
        //PARA ACCEDER A LAS VARIABLES DE LA CLASE
        //OBLIGATORIO LA PALABRA CLAVE this
        this.saludo = "Bienvenidos al Lunes!!!";
        this.year = 2026;
    }
}
