export class PokemonModel {
    id: number
    name: string
    weight: number
    height: number
    abilities: any[]
    types: string


    constructor(
        id: number,
        name: string,
        weight: number,
        height: number,
        abilities: any[],
        types: string,

    ){
        this.id = id;
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.abilities = abilities;
        this.types = types;
    }

    delete(){
        console.log(`item deletado ${this.name}`)
    }

}