import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  width: 100px;
  border: 1px solid white;
  border-radius: 10px;
  overflow: hidden;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  text-align: center;
  padding: 10px;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 5px;
`;

function PokemonCard({ pokemon, onAdd, isSelected }) {
  const nav = useNavigate();
  const addClick = (e) => {
    e.stopPropagation();
    if (!isSelected) {
      onAdd(pokemon);
    } else {
      alert("!!");
    }
  };
  return (
    <Card onClick={() => nav(`/pokemon-detail?id=${pokemon.id}`)}>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <p style={{ color: "black" }}>{pokemon.korean_name}</p>
      <Button onClick={addClick}>추가</Button>
    </Card>
  );
}

export default PokemonCard;
