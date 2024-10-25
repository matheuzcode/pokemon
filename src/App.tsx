import { useEffect, useState } from 'react'
import { axiosApi } from './services/api'
import { PokemonModel } from './model/Pokemon'
import { handleDelete } from './controller/pokemonController'

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
            promise.data.types,
            promise.data.sprites
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

  const deletePokemon = (pokemon: PokemonModel) => {
    if(pokemons){
      const updatedPokemons = handleDelete(pokemons, pokemon)
      setPokemons(updatedPokemons)
    }
  }
 
  return (
    <div className='flex flex-wrap justify-center gap-8'>
      {
        pokemons?.map((pokemon) => {
          return (
            <div className='p-3 border-2' key={pokemon.id}>
              <img src={pokemon.sprites.front_default} alt="" width={300} height={300} />
              <div>name: {pokemon.name}</div>
              <div>weight: {pokemon.weight}</div>
              <div>height: {pokemon.height}</div>
              <button className='bg-red-500 p-0.5' onClick={() => deletePokemon(pokemon)}>DELETE</button>
            </div>
          )
        })
      }
    </div>
  )
}


