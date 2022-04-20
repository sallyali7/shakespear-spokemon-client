import React from 'react'
import Error from '../lib/Error'
import { getAllPokemon } from '../lib/api'
import PokeCard from '../Poke/PokeCard'


function PokeIndex() {

  const [pokemon, setPokemon] = React.useState(null)
  const [searchedValue, setSearchedValue] = React.useState('')
  const [isError, setIsError] = React.useState(false)
  const isLoading = !pokemon && !isError

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getAllPokemon()
        setPokemon(res.data)
      } catch (err) {
        setIsError(true)
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
      <div className="header">
        <h1 className="blue">P</h1>
        <h1 className="red">O</h1>
        <h1 className="yellow">K</h1>
        <h1 className="blue">E</h1>
        <h1 className="green">M</h1>
        <h1 className="red">O</h1>
        <h1 className="yellow">N</h1>
      </div>
      <div className="searchbox">
        <input className="search" id="search" role="search" onChange={handleSearch}  placeholder="Search Pokemon.."/>
      </div>
      <div className="pokeindex">
        <div className="pokemonmain">
          {isLoading && <p role="loading">...loading</p>}
          {isError && <Error />}
          {pokemon &&
          filteredPokemons(pokemon).map(pokemon => (
            <PokeCard 
              key={pokemon._id}
              name={pokemon.name}
              pokemonId={pokemon._id} />
          ))
          }
        </div>
      </div>
    </section>
  )
}



export default PokeIndex