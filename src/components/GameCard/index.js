// import React from "react";
import React, { Component } from 'react'

import "./style.css";

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);


class GameCard extends Component {

  render() {
    let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
    return (
      <div className="card">
        <div className="img-container">
          <img alt={this.props.name} src={imgSrc} id={this.props.id}  onClick={(e) => this.props.shufflePokemon(e, this.props.id)} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {this.props.name}
            </li>
          </ul>
        </div>
      </div>
    )
  };
}

export default GameCard;