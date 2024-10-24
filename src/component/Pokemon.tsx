export interface PokemonPops {
    name: string
    id: number
    weight: number
    height: number
    abilities: any[]
}


export function Pokemon({ abilities, height, id, name, weight }: PokemonPops) {
    return <div>
        {name}
        {height}
        {weight}
        {abilities.map((spell) => {
            return (<div key={spell.slot}>{spell.ability.name}</div>)
        })}
    </div>
}