import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template: "<p>Aquí va un empleado</p>",
  styleUrls: ['./empleado.component.css']
  //styles:["p {background-color: antiquewhite;}"]
})
export class EmpleadoComponent implements OnInit {
  nombre="Juan";
  apellido="Díaz";
  //private edad=18;
  edad=18;
  empresa="Píldoras Informáticas";

  /*
  getEdad(){
    return this.edad;
  }
  */

  constructor() { }

  ngOnInit(): void {
  }

}
