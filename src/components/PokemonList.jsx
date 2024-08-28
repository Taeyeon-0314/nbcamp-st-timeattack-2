import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(150px, 1ft));
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
  border: 1px;
  background-color: white;
`;

const PokemonList = ({ pokemonList, onAddPokemon, selectedPokemon = [] }) => {
  return (
    <ListContainer>
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onAdd={() => {
            onAddPokemon(pokemon);
          }}
          isSelected={selectedPokemon.some((p) => p.id === pokemon.id)}
        />
      ))}
    </ListContainer>
  );
};

export default PokemonList;
