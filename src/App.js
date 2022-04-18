/* eslint-disable react/jsx-key */


// import React from 'react'
// import axios from 'axios'

// // Create Routes

// function App() {
//   React.useEffect(() => {
//     const getData = async () => {
//       const res = await axios.get('/api/pokemon')
//       console.log(res.data)
//     }
//     getData()
//   })

//   return (
//     <p>pokemons in console</p>
//   )
// }

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PokeShow from './Poke/PokeShow'
import PokeIndex from './Poke/PokeIndex'



function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/pokemon">
          <PokeIndex />
        </Route>
        <Route exact path="/pokemon/:pokemonId">
          <PokeShow />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
export default App