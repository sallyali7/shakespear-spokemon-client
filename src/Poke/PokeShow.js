import React from 'react'
import { useParams } from 'react-router-dom'
import { getIndividualPokemon } from '../lib/api'
import Error from '../lib/Error'

function PokeShow() {
  const { pokemonId } = useParams()
  const [pokemon, setPokemon] = React.useState(null)
  const [isError, setIsError] = React.useState(null)

  console.log(pokemonId)

  console.log(pokemonId)
  const fetchPokemon = React.useCallback(() => {
    const getData = async () => {
      try {
        const res = await getIndividualPokemon(pokemonId)
        return setPokemon(res.data)
      } catch (err) {
        setIsError(true)
        return
      }
    
    }
    getData()
  }, [pokemonId])

  React.useEffect(() => {
    fetchPokemon()
  }, [pokemonId, fetchPokemon])

  return (
    <section className="pokeshow">
      {isError && <Error />}
      <div>
        {pokemon ? (
          <div>
            <h2 className="pokemonname">
              {pokemon.name}
            </h2>
            <div>
              <p className="pokemondescription">
                {pokemon.description}             
              </p>
            </div>
            <div>
              <figure className="pokemonimage">
                <img src={pokemon.sprite} alt={pokemon.name} />
              </figure>
            </div>
          </div>

        ) : (
          <p>Loading</p>
        )
        }
      </div>
    </section>
  )
}

export default PokeShow