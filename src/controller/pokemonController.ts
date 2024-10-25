import { PokemonModel } from "../model/Pokemon";

export const handleDelete = (pokemons: PokemonModel[], pokemonToDelete: PokemonModel ): PokemonModel[] => {
    return pokemons.filter((pokemon) => pokemon.id !== pokemonToDelete.id )
} 