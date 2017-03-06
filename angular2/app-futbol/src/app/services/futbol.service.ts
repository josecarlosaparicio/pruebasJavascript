import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Equipo } from '../msg/equipo.class';
import { Jugador } from '../msg/jugador.class';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class FutbolService {
    
    constructor(private http: Http){}

    getEquipos(): Observable<Equipo[]>{
        return this.http
            .get('assets/data/equipos.json')
            .map(this.handleResponseGetEquipos);
    }

    getJugadores(idEquipo: string): Observable<Jugador[]>{
        return this.http
            .get('assets/data/' + idEquipo + '.json')
            .map(this.handleResponseGetJugadores);
    }

    private handleResponseGetEquipos(res : Response){
        let equipos: Equipo[] = [];
        let jsonResponse = res.json();
        for(let i in jsonResponse.teams){
            equipos.push(new Equipo(
                jsonResponse.teams[i].code, 
                jsonResponse.teams[i].name
            ));
        }
        equipos.sort((eq1, eq2) => { 
            if(eq1.nombre > eq2.nombre) return 1;
            if(eq1.nombre === eq2.nombre) return 0;
            if(eq1.nombre < eq2.nombre) return -1;
        });
        return equipos;
    }

    private handleResponseGetJugadores(res : Response){
        let jugadores: Jugador[] = [];
        let jsonResponse = res.json();
        for(let i in jsonResponse.jugadores){
            jugadores.push(new Jugador(
               jsonResponse.jugadores[i].id,
               jsonResponse.jugadores[i].nombre,
               jsonResponse.jugadores[i].posicion,
               jsonResponse.jugadores[i].dorsal               
            ))
        }
        return jugadores;
    }
}