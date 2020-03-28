import React, { Component } from "react";

import "./PokemonCard.css";

class PokemonCard extends Component {
  render() {
    let imgEnd;
    const { parametrai } = this.props;
    const { id, name, type, base_experience } = parametrai;
    // console.log(id);
    // const { id, name, type, base_experience } = this.props;
    // console.log("id" + id);
    // const id = Math.floor(Math.random() * 200 + 1);
    if (id > 9 && id < 100) {
      imgEnd = "0" + id;
    } else if (id < 10) {
      imgEnd = "00" + id;
    } else imgEnd = id;
    return (
      <div className="pokemonCard Pokemon-hover">
        <h1 className="PokemonCard-title">{name}</h1>
        <img
          className="imgPokemon"
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imgEnd}.png`}
        />
        <p className="PokemonCard-data">Type: {type}</p>
        <p className="PokemonCard-data">EXP: {base_experience}</p>
      </div>
    );
  }
}

export default PokemonCard;
