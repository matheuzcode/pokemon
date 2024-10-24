
export class PokemonModel {
    id: number
    name: string
    weight: number
    height: number
    abilities: any[]
    types: string
    sprites: Record<string,any>

    constructor(
        id: number,
        name: string,
        weight: number,
        height: number,
        abilities: any[],
        types: string,
        sprites: Record<string,any>

    ){
        this.id = id;
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.abilities = abilities;
        this.types = types;
        this.sprites = sprites
    }

}