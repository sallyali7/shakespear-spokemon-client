import { Link } from 'react-router-dom'

function PokeCard({ pokemonId, name,  description }) {
  return (
    <section className="pokecard">
      <div>
        <div>
          <Link to={`/pokemon/${pokemonId}`}>
            <h3 className="pokename">{name}</h3>
            <p className="pokedescription">{description}</p>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PokeCard

