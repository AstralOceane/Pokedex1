//importar o react no arquivo na linha debaixo
import React from 'react'
import Button from '@material-ui/core/Button'
//Criar função que renderiza a pokedexpage na tela
const PokedexPage = () => {
    return(
/**Criar jsx(html) da tela  na linha debaixo*/
    <div>
        <p>PokedexPage</p>
        {/**criar botao voltar */}
        <Button variant ="outlined" color = "secundary">Back</Button>
    </div>
   )
}
  

// Possibilitar que o componente homepage 
// seja importaado em outro aquivo do projeto na linha debaixo
export default PokedexPage