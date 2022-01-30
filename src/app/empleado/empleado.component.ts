import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  nombre="Juan";
  apellido="Díaz";
  edad=18;
  habilitacionCuadro=true;
  usrRegistrado=false;

  getRegistroUsuario(){
    this.usrRegistrado=true;
  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
