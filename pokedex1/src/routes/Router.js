import React from 'react'
import {Switch, Route} from 'react-router-dom'
import HomePage from '../screens/HomePage/HomePage'
import DetailsPage from '../screens/DetailsPage/DetailsPage'
import PokedexPage from '../screens/PokedexPage/PokedexPage'

const Router = () => {
  return(
      <Switch>
          <Route exact path={"/HomePage"} component={HomePage}/>
          <Route exact path={"/pokedex"} component={PokedexPage}/>
          <Route exact path={"/details"} component={DetailsPage}/>
      </Switch>
  )
}

export default Router