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
  textoDeRegistro="No hay nadie registrado";

  getRegistroUsuario(){
    this.usrRegistrado=true;
  }

  setUsuarioRegistrado(event:Event){
    //alert(event.target);
    if((<HTMLInputElement>event.target).value=="si"){
      this.textoDeRegistro="El usuario se acaba de registrar";
    }else{
      this.textoDeRegistro="No hay nadie registrado";
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
