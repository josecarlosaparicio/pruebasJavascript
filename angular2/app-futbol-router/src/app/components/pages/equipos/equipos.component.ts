import { Component, OnInit } from '@angular/core';
import { FutbolService } from '../../../services/futbol.service';
import { Equipo } from '../../../msg/equipo.class';

@Component({
  selector: 'equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  equipos: Equipo[] = [];

  constructor(private futbolService: FutbolService) { }

  ngOnInit() {
     this.futbolService.getEquipos().subscribe(res => {
       this.equipos = res;
     });
  }

}
