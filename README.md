# Pokemon Search #

## Dependencies ##

• react: ^17.0.2,

• react-router: ^6.0.0-alpha.2,

• react-router-dom: ^5.2.0,

• http-proxy-middleware: ^2.0.4

• axios: ^0.26.1

• @testing-library/jest-dom: ^5.16.4,

• @testing-library/react: ^12.1.5,

• @testing-library/user-event: ^14.1.1

• sass: ^1.43.5


Link to server: https://github.com/sallyali7/shakespear-pokemon-server-

### Overview ###

This Pokemon app is a full-stack MERN webapp that allows users to search and view pokemons (20 of them) and read their description in shakespeare English. The Pokemon names are displayed and are clickable on the homepage. Once searched, a user can navigate to the individual pokemon and view their details and sprites.
 

## Process ##

I started by setting up a setup proxy so the client and server are listening to each other. I tested this by writing an axios function on app.js and was able to view the json files on the console. 

I then proceed by setting up my files one at a time and importing/routing them in my App.js. 

Note: Switch doesn't work on React-router-dom v6.

In the lib/api.js file, you'll find exported axios functions to get all pokemons or to get an individual pokemon based on the request.

## Search Function ##

I used the filter method to filter through the array of pokemons and displayed it on the UI. I used toLowerCase so that the strings are converted to lower case and the searches/results are displayed irrespectively of which letter case the users inputs in the search box.

```js
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
```

```js
return (
    <section className="hero">
      <div className="searchbox">
        <input className="search" id="search" role="search" onChange={handleSearch}  placeholder=" Search Pokemon.."/>
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

```














