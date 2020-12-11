//importar o react no arquivo na linha debaixo
import React from 'react'
import Button from '@material-ui/core/Button'

//Criar função que renderiza a home page na tela na linha debaixo
    const DetailsPage = () => {
      /**Criar jsx(html) da tela  na linha debaixo*/
    return(
    <div>
    
        {/**criar botao voltar */}
        <Button
         variant="outlined"
          color="secondary">
          Back</Button>

        {/**criar botao show pokedex */}
        <Button 
          variant="outlined"
          color="primary">Show Pokedex</Button>        
    </div>        
    )
 }
// Possibilitar que o componente detailspage
// seja importaado em outro aquivo do projeto na linha debaixo
export default DetailsPage

