import {Jugador} from './jugador.class';

export class Equipo {
    id: string;
    nombre: string;
    jugadores: Jugador[];

    constructor(id:string, nombre: string = "", jugadores: Jugador[] = []){ 
        this.id = id;
        this.nombre = nombre;
        this.jugadores = jugadores;       
    }

    public getId() :string{
        return this.id;
    }

    public getNombre() :string{
        return this.nombre;
    }

    public getJugadores() :Jugador[]{
        return this.jugadores;
    }

    public setId(id:string) :void{
        this.id = id;
    }

    public setNombre(nombre:string) :void{
        this.nombre = nombre;
    }

    public setJugadores(jugadores: Jugador[]) :void{
        this.jugadores = jugadores;
    }
}