import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Router from '../src/routes/Router'

const App = ()=> {
  return (
    <div >
    <BrowserRouter>
        {/**<NavBar/> */}
    </BrowserRouter>

        <Router/>
    </div>
  );
}

export default App;
