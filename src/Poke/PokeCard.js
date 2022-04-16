import { Link } from 'react-router-dom'

function PokeCard({ pokemonId, name, sprite, description }) {
  return (
    <section>
      <div>
        <div>
          <h5>{name}</h5>
          <p>{description}</p>
        </div>
        <Link to={`/pokemon/${pokemonId}`}>
          <img src={sprite} alt={name}/>
        </Link>
      </div>
    </section>
  )
}

export default PokeCard

