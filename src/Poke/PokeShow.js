import React from 'react'
import { useParams } from 'react-router-dom'
import { getIndividualPokemon } from '../lib/api'


function PokeShow(){
  const { pokemonId } = useParams()
  const [pokemon, setPokemon] = React.useState()

  console.log(pokemonId)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getIndividualPokemon(pokemonId)
        setPokemon(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [pokemonId])

  console.log(pokemonId)
  // const fetchPokemon = React.useCallback(() => {
  //   const getData = async () => {
  //     try {
  //       const res = await getIndividualPokemon(pokemonId)
  //       return setPokemon(res.data)
  //     } catch (err) {
  //       console.log(err)
  //       return
  //     }
    
  //   }
  //   getData()
  // }, [pokemonId])

  // React.useEffect(() => {
  //   fetchPokemon()
  // }, [pokemonId, fetchPokemon])

  return (
    <section>
      <div>
        {pokemon ? (
          <div>
            <h2>
              {pokemon.name}
            </h2>
            <div>
              <p>
                {pokemon.description}             
              </p>
            </div>
            <div>
              <figure>
                <img src={pokemonId.sprite} alt={pokemon.name} height={500} width= {700}/>
              </figure>      
            </div>
          </div>

        ) : (
          <p>loading</p>
        )
        }
      </div>
    </section>
  )
}

export default PokeShow