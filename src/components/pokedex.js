import React, { Component } from "react";
import PokemonCard from "./pokemonCard";
import "./Pokedex.css";

class Pokedex extends Component {
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

  //  https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png
  render() {
    // const { id, name, type, base_experience } = this.defaultProps[0];
    const { pokemon } = this.props;
    console.log(pokemon);

    // const sum =
    //   parameters1.base_experience +
    //   parameters2.base_experience +
    //   parameters3.base_experience +
    //   parameters4.base_experience;
    // const sum1 =
    //   parameters5.base_experience +
    //   parameters6.base_experience +
    //   parameters7.base_experience +
    //   parameters8.base_experience;
    // console.log("sum " + sum + "sum1 " + sum1);
    // for(i=0;i<this.props.length;i++)
    console.log(this.props);
    return (
      <div>
        {/* <p>{sum > sum1 ? "Laimetojas" : "Pralaimejes"}</p> */}
        <div className="Pokedex">
          {pokemon.map(p => (
            <PokemonCard parametrai={p} />
          ))}
        </div>
      </div>
    );

    // galasImg="00"+defaultProps[0].id+".png"
  }
}

export default Pokedex;
