import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";
import styled from "styled-components";

const dexMainDiv = styled.main`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 0;
`;

function Dex() {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    setSelectedPokemon((prev) => [...prev, pokemon]);
  };

  const removePokemon = (pokemon) => {
    setSelectedPokemon((prev) => prev.filter((p) => p.id !== pokemon.id));
  };

  return (
    <dexMainDiv>
      <Dashboard
        selectedPokemon={selectedPokemon}
        onRemovePokemon={removePokemon}
      />
      <PokemonList
        pokemonList={MOCK_DATA}
        selectedPokemon={selectedPokemon}
        onAddPokemon={addPokemon}
      />
    </dexMainDiv>
  );
}

export default Dex;
