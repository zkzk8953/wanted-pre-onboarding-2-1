import styled from "styled-components";
import Board from "../../components/Board/Board";

const BOARD_LIST = [
  {
    title : "Next Up",
  },
  {
    title : "In Progress"
  },
  {
    title : "Completed"
  }
];

const Main = () => {
  const boardList = BOARD_LIST;

  return (
    <MainWrap>
      <MainBoard>
        {
          boardList.map(board => (
            <Board title={board.title} />
          ))
        }
      </MainBoard>
    </MainWrap>
  );
};

export default Main;

const MainWrap = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const MainBoard = styled.div`
  width: 1600px;
  height: 730px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
