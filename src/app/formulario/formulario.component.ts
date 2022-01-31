import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  interpolationtitulo = "Inscríbete aquí"
  propertyBindingColor = "#1b73f9"
  newEmail = {
    title: "Tú Email",
    email: " ",
    comentario: "Nunca compartimos tu correo electrónico con nadie más.",
  }


  constructor() { }
  ngOnInit(): void {
  }

}
