export class Equipo{
    constructor(
        public code: string = "",
        public crestUrl: string = "",
        public name: string = "",
        public shortName: string = "",
        public squadMarketValue: string = ""
    ){}

    mapFromJson(json: any){
        this.code = json.code;
        this.crestUrl = json.crestUrl;
        this.name = json.name;
        this.shortName = json.shortName;
        this.squadMarketValue = json.squadMarketValue;
    }
}