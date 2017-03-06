import { Component } from '@angular/core';
import { EquipoComponent } from './components/equipo/equipo.component';
import { Equipo } from './msg/equipo.class';
import { Jugador } from './msg/jugador.class';
import { FutbolService } from './services/futbol.service';

@Component({
  selector: 'app-futbol',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
  title = 'La Liga';
  equipos: Equipo[] = []; 

  constructor(private futbolService: FutbolService){
  }

  ngOnInit(){
    this.futbolService.getEquipos().subscribe(equipos => {
      this.equipos = equipos;
    });
  }

   
}
