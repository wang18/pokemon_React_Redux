import React, { Component } from 'react';
import '../App.css';

import PokemonList from './pokemonList';

class App extends Component {
  render() {
    return (
      <div className="App">
          <PokemonList/>
      </div>
    );
  }
}

export default App;
