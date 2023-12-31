import React from "react";
import './App.css';

const Pokecard = ({ id, name, type, base_experience }) => {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="Pokecard">
      <div className="PokemonInfo">
        <h3>{name}</h3>
        <img src={imageUrl} alt={name} />
        <p>Type: {type}</p>
        <p>Base Experience: {base_experience}</p>
      </div>
    </div>
  );
};

const Pokedex = ({ pokemon }) => {
  return (
    <div className="Pokedex">
      {pokemon.map(p => (
        <Pokecard
          key={p.id}
          id={p.id}
          name={p.name}
          type={p.type}
          base_experience={p.base_experience}
        />
      ))}
    </div>
  );
};

Pokedex.defaultProps = {
  pokemon: [
    { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
    { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
    { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
    { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
    { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
    { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
    { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
    { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
  ]
};

const App = () => {
  const defaultPokemon = Pokedex.defaultProps.pokemon; 
  return (
    <div className="App">
      <h1 className="Title">Pokedex</h1>
      <div className="Pokedex">
        <Pokedex pokemon={defaultPokemon} />
      </div>
    </div>
  );
};


export default App;