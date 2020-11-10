
import './App.css';
import React from 'react'

import pokemons from './data'
import ListPokemons from './listPokemons'


class App extends React.Component {
  render () {
   
   return (
   <div className='App'>
     
      <ListPokemons poke = {pokemons} />
      
      </div>
   )
  }
}

export default App;
