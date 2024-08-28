import styled from "styled-components";

const DashboardContainer = styled.div`
  width: 1200px;
  height: 250px;
  display: flex;
  flex-direction: column;
`;
const StDiv = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
`;

const Dashboard = ({ selectedPokemon, onRemovePokemon }) => {
  return (
    <DashboardContainer>
      <h2>대시보드</h2>
      <StDiv>
        {selectedPokemon.map((pokemon) => (
          <div key={pokemon.id}>
            <img src={pokemon.img_url}></img>
            <p>{pokemon.korean_name}</p>
            <button type="button" onClick={() => onRemovePokemon(pokemon)}>
              삭제
            </button>
          </div>
        ))}
      </StDiv>
    </DashboardContainer>
  );
};

export default Dashboard;
