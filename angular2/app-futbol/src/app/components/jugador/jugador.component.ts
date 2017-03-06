import { Component, Input } from '@angular/core';
import { Jugador } from '../../msg/jugador.class';

@Component({
  selector: 'jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent {
  @Input() 
  jugador: Jugador;  

  constructor(){    
  }

  ngOnInit(){ 
  }

}
