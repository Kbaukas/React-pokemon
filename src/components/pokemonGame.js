import React, { Component } from "react";
import Pokedex from "./pokedex";
import "./pokemonGame.css";

class PokemonGame extends Component {
  static defaultProps = [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eeevee", type: "normal", base_experience: 65 }
  ];

  render() {
    let hand2 = [];
    for (let i = 0; i < 8; i++) {
      hand2.push(this.props[i]);
    }
    let hand1 = [];

    console.log(hand2.length);
    var i = 0;
    while (i < 4) {
      let randIndex = Math.floor(Math.random() * hand2.length);
      //   console.log("randomas " + randIndex);
      let randPokemon = hand2.splice(randIndex, 1)[0];

      //   console.log(hand2);
      hand1.push(randPokemon);
      //   console.log(hand1);
      i++;
    }
    console.log(hand2);
    console.log(hand1);
    let sum1 = 0;
    let sum2 = 0;
    hand1.map(h1 => (sum1 += h1.base_experience));
    console.log("suma1 " + sum1);
    hand2.map(h2 => (sum2 += h2.base_experience));
    console.log("suma2 " + sum2);

    return (
      <div>
        <h1>Pokedex</h1>

        {sum1 > sum2 ? (
          <h2 style={{ color: "green" }}>Laimetojas</h2>
        ) : sum1 < sum2 ? (
          <h2 style={{ color: "red" }}>Pralaimejes</h2>
        ) : (
          <h2 style={{ color: "blue" }}>Lygiosios</h2>
        )}

        <Pokedex pokemon={hand1} />
        <h2 className="pokemonGame-VS">VS</h2>
        {sum1 < sum2 ? (
          <h2 style={{ color: "green" }}>Laimetojas</h2>
        ) : sum1 > sum2 ? (
          <h2 style={{ color: "red" }}>Pralaimejes</h2>
        ) : (
          <h2 style={{ color: "blue" }}>Lygiosios</h2>
        )}
        <Pokedex pokemon={hand2} />
      </div>
    );
  }
}

export default PokemonGame;
