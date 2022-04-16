import React from 'react'
import { getAllPokemon } from '../lib/api'
import PokeCard from '../Poke/PokeCard'


function PokeIndex() {
  const [pokemon, setPokemon] = React.useState(null)
  const [searchedValue, setSearchedValue] = React.useState('')


  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getAllPokemon()
        setPokemon(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])


  const handleSearch = (e) => {
    e.preventDefault()
    setSearchedValue(e.target.value)
  }
  console.log(searchedValue) // test


  const filteredPokemons = (pokemon) => {
    return pokemon.filter(pokemon => {
      return (
        pokemon.name.toLowerCase().includes(searchedValue.toLowerCase()) 
      )
    })
  }

  return (
    <section>
      <input className="Search" type="search" placeholder="Pokemon Search..." onChange={handleSearch}/>
      {pokemon &&
          filteredPokemons(pokemon).map(pokemon => (
            <PokeCard
              key={pokemon._id}
              name={pokemon.name}
              sprite={pokemon.sprite}
              pokemonId={pokemon._id}
            />
          ))
      }

    </section>
  )
}



export default PokeIndex