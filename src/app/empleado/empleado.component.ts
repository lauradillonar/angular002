import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template: "<p>Aquí va un empleado</p>",
  styleUrls: ['./empleado.component.css']
  //styles:["p {background-color: antiquewhite;}"]
})
export class EmpleadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
