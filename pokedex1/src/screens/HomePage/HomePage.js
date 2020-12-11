//importar o react no arquivo
import React from 'react'
import Button from '@material-ui/core/Button'
//Criar função que renderiza a home page na tela
const HomePage = () => {

  /**Criar jsx(html) da tela */
  return(
    <div>
        HomePage
        {/**criar botao ver pokedex */}
        <Button variant ="outlined" color = "primary">Show Pokedex</Button>
        
    </div>
  )
}
// Possibilitar que o componente homepage 
// seja importaado em outro aquivo do projeto
export default HomePage