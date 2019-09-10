import { Component } from '@angular/core';
import {DocentesService} from './docentes.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DocentesService]
})
export class AppComponent {
  title = 'solucitud-laboratorio';
  lista = [];
  constructor(servicio:DocentesService){
    this.lista = servicio.getDocentes();
  }
}
