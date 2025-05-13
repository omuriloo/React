import React from 'react'
import './App.css'
import Titulo from './assets/componentes/Titulo/Titulo'
import Imagem from './assets/componentes/Imagem/Imagem'
import Paragrafo from './assets/componentes/Paragrafo/Paragrafo'
import Lista from './assets/componentes/Lista/Lista'
import Botao from './assets/componentes/Botao/Botao'

function App(){
  const nomeUsuario = 'Murilo'
  return(
    <div className="App">
      <Titulo nome={nomeUsuario}/>
      <Paragrafo/>
      <Imagem/>
      <Lista/>
      <Botao/>
      
    
    </div>
  )
}

export default App