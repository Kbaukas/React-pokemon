import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Dog from "./components/Dog";
import Pokedex from "./components/pokedex";
import PokemonGame from "./components/pokemonGame";

function App() {
  return (
    <div className="App">
      {/* <Pokedex /> */}
      <PokemonGame />
    </div>
  );
}

export default App;
