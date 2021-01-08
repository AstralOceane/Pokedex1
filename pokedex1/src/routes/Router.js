import React from 'react'
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import PokemonListScreen from '../screens/PokemonListScreen/PokemonListScreen'
import PokemonDetailScreen from '../screens/PokemonDetailScreen/PokemonDetailScreen'
import PokedexScreen from '../screens/PokedexScreen/PokedexScreen'

const Router = () => {
  return(
    <BrowserRouter>
        <Switch>
            <Route exact path={"/pokemonList"} component={PokemonListScreen}/>
            <Route exact path={`/pokedex/${name}`} component={PokedexPage}/>
            <Route exact path={"/details"} component={PokemonDetailScreen}/>
        </Switch>
    </BrowserRouter>
  )
}

export default Router