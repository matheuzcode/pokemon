import { useEffect, useState } from 'react'
import { axiosApi } from './services/api'
import { Pokemon, PokemonPops } from './component/Pokemon'
import { PokemonModel } from './model/Pokemon'





export function App() {

  const [pokemons, setPokemons] = useState<PokemonModel[] | null>(null)
  

  const getPokemon = async () => {
    try {
      const { status, data } = await axiosApi.get("pokemon/")
      if (status === 200) {

        const resultList = data.results.map((pokemon: { name: string, url: string }) => axiosApi.get(pokemon.url))

        const promiseList = await Promise.all(
          resultList
        )
        const pokemonList = promiseList.map(
          promise => new PokemonModel(
            promise.data.id,
            promise.data.name,
            promise.data.weight,
            promise.data.height,
            promise.data.abilities,
            promise.data.types
          ))
        setPokemons(pokemonList)
      } else {
        console.log("BAD REQUEST")
      }
    } catch (error) {
      console.log("ERROR", error)
    }
  }

  useEffect(() => {
    getPokemon()
  }, [])

  const handleDelete = (pokemon:PokemonModel) => {
    pokemon.delete()
  }

  return (
    <div className='flex flex-wrap'>
      {
        pokemons?.map((pokemon) => (
          <div className='p-3 ' key={pokemon.id}>
            <div>name: {pokemon.name}</div>
            <div>weight: {pokemon.weight}</div>
            <div>height: {pokemon.height}</div>
            <button className='bg-red-500 p-0.5' onClick={() => handleDelete(pokemon)}>DELETE</button>
          </div>
        ))
      }
    </div>
  )
}


