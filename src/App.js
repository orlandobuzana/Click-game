import React, { Component } from "react";
import PokemonCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/NavBar";
// import Title from "./components/Title";
import pokemons from "./pokemon.json";

class App extends Component {
  constructor(props) {
    super(props);
    // Setting this.state.pokemons to the pokemons json array
    this.state = {
      pokemons,
      score: 0,
      highscore: 0,
      arrPok: []
    };
    this.shufflePokemon = this.shufflePokemon.bind(this);
  }

  handleReset = () => {
    this.setState({ score: 0 });
    this.setState({ highscore: 0 });
  }

  scoreLogic = () => {
    if ((new Set(this.state.arrPok)).size !== this.state.arrPok.length) {
      this.setState({ score: 0 });
      this.setState({ arrPok: new Set(this.state.arrPok) }, () => console.log(this.state.arrPok));
    } else {
      this.setState(st => ({ score: st.score + 1 }));
      if (this.state.score === this.state.highscore) {
        this.setState(st => ({ highscore: st.highscore + 1 }));
      }
    }
  }

  shufflePokemon = (e, id) => {
    const idPok = e.target.id;
    // console.log(idPok);
    // pushing clicked Pokemon to an array
    this.setState(prevState => ({
      arrPok: [...prevState.arrPok, Number(idPok)]
    }),
      () => { this.scoreLogic() });

    const pokemons = this.state.pokemons.sort(() => Math.random() - 0.5);
    this.setState({ pokemons });
  }

  render() {
    return (
      <div>
        <Navbar> Score: {this.state.score} || Top Score: {this.state.highscore} 
         </Navbar>
        <Wrapper>
          {this.state.pokemons.map(p => (
            <PokemonCard
              shufflePokemon={this.shufflePokemon}
              id={p.id} name={p.name} key={p.id}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
