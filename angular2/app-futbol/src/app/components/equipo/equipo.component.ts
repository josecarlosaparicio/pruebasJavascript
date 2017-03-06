import { Component, Input } from '@angular/core';
import { Equipo } from '../../msg/equipo.class';
import { Jugador } from '../../msg/jugador.class';
import { FutbolService } from '../../services/futbol.service';

@Component({
  selector: 'equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent {
  
  @Input() 
  equipo: Equipo;

  static selectedEquipoId: string;

  constructor(private futbolService: FutbolService){
  }

  ngOnInit(){
      this.futbolService.getJugadores(this.equipo.getId())
      .subscribe(jugadores => {
        this.equipo.setJugadores(jugadores);
      });
  }

  activeEquipo(){
      if(EquipoComponent.selectedEquipoId === this.equipo.getId()){
          EquipoComponent.selectedEquipoId = "";
      }else{
          EquipoComponent.selectedEquipoId = this.equipo.getId();
      }
  }

  getEquipoSelected(){
      return EquipoComponent.selectedEquipoId;
  }

}
