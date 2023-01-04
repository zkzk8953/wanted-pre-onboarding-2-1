import styled from "styled-components";

const Board = () => {
    return (
      <BoardWrap>
        <p>this is board</p>
      </BoardWrap>
    );
  };
  
  export default Board;
  
  const BoardWrap = styled.div`
    width: 30%;
    height: 100%;
    background-color: green;
    padding: 20px 30px;
  `;
  