import { Injectable } from '@angular/core';
import { HttpService } from './http-service.service';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Equipo }  from '../msg/equipo.class';
import { ItemClasificacion } from '../msg/itemClasificacion.class';

@Injectable()
export class FutbolService {

  constructor(private http: HttpService) { }

  getEquipos(): Observable<Equipo[]>{
    return this.http.get('assets/data/equipos.json')
      .map(this.mapResponseToEquipos);
  }

  mapResponseToEquipos(res:Response): Equipo[]{
    let equipos: Equipo[] = [];
    let equipo: Equipo;
    for(let i in res.json().teams){
      equipo = new Equipo();
      equipo.mapFromJson(res.json().teams[i])
      equipos.push(equipo);
    }
    equipos.sort((eq1 : Equipo, eq2 : Equipo) => {
      if(eq1.name > eq2.name) return 1;
      if(eq1.name === eq2.name) return 0;
      if(eq1.name < eq2.name) return -1;
    });
    return equipos;
  }  

  getClasificacion(): Observable<ItemClasificacion[]>{
    return this.http.get('assets/data/clasificacion.json')
      .map((res) => {
        return res.json();
      });
  }

  

}
