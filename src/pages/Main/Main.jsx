import styled from "styled-components";
import Board from "../../components/Board/Board";

const Main = () => {
  return (
    <MainWrap>
      <Board />
      <Board />
      <Board />
    </MainWrap>
  );
};

export default Main;

const MainWrap = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20% 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: blue;
`;
