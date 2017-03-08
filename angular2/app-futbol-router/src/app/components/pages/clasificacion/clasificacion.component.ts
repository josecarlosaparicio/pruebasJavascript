import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FutbolService } from '../../../services/futbol.service';
import { ItemClasificacion } from '../../../msg/itemClasificacion.class';

@Component({
  selector: 'clasificacion',  
  styles: ['tr.itemClas { cursor: pointer; }'],
  template: `
    <table class="table">
      <thead>
        <tr class="active">
          <th>Equipo</th>
          <th>Victorias</th>
          <th>Empates</th>
          <th>Derrotas</th> 
          <th>Puntos</th>  
        </tr>
      </thead>
      <tbody>
        <tr class="itemClas" *ngFor="let item of clasificacion" (click)="verEquipo(item)">
          <td>{{item.teamName}}</td>
          <td>{{item.wins}}</td>
          <td>{{item.draws}}</td>
          <td>{{item.losses}}</td> 
          <td><strong>{{item.points}}</strong></td>       
        </tr>
      </tbody>
    </table>
  `
})
export class ClasificacionComponent implements OnInit {
  
  clasificacion: ItemClasificacion[] = [];
  constructor(
    private router: Router,
    private futbolService: FutbolService){}

  ngOnInit() {
    this.futbolService.getClasificacion().subscribe(res =>{
      this.clasificacion = res;      
    });
  }

  verEquipo(item: ItemClasificacion){
    this.router.navigate(['/equipos']);
  }

}
