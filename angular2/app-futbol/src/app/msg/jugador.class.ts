export class Jugador {
    id: string;
    nombre: string;
    demarcacion: string;
    dorsal: number;

    constructor(id:string, nombre: string = "", demarcacion: string = "", dorsal: number = 0){ 
        this.id = id;
        this.nombre = nombre;
        this.demarcacion = demarcacion;
        this.dorsal = dorsal;  
    }

    public getId() :string{
        return this.id;
    }

    public getNombre() :string{
        return this.nombre;
    }

    public getDemarcacion() :string{
        return this.demarcacion;
    }

    public getDorsal() :number{
        return this.dorsal;
    }    

    public setId(id:string) :void{
        this.id = id;
    }

    public setNombre(nombre:string) :void{
        this.nombre = nombre;
    }

    public setDemarcacion(demarcacion:string) :void{
        this.demarcacion = demarcacion;
    }

    public setDorsal(dorsal:number) :void{
        this.dorsal = dorsal;
    }   

    public isPortero() :boolean{
        return this.demarcacion === 'Portero';
    }

    public isMedio():boolean{
        return this.demarcacion === 'Mediocampista';
    }

    public isDefensa():boolean{
        return this.demarcacion === 'Defensa';
    }

    public isDelantero():boolean{
        return this.demarcacion === 'Delantero';
    }

   
}