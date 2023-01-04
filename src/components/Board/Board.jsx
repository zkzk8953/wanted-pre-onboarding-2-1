import styled from "styled-components";
import Card from "../Card/Card";

const CARD_LIST = [
  {
    id: 1,
    title: "제목",
    task: 0,
    ended_at: new Date().getDate(),
    user: "담당자"
  },
  {
    id: 1,
    title: "제목",
    task: 0,
    ended_at: new Date().getDate(),
    user: "담당자"
  },
]

const Board = ({title}) => {
    return (
      <>
        <BoardWrap>
          <BoardHeading>{title}</BoardHeading>
          <BoardContent>
            {
              CARD_LIST.map(() => (
                <Card />
              ))
            }
          </BoardContent>
        </BoardWrap>
      </>
    );
  };
  
  export default Board;
  
  const BoardWrap = styled.div`
    width: 350px;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-between;
    padding: 20px 30px;
  `;

  const BoardHeading = styled.h1`
    width: 100%;
    height: 50px;
    font-size: 30px;
    font-weight: 600;
    line-height: 50px;
    text-align: center;
    background-color: yellow;
  `;

  const BoardContent = styled.div`
    width: 100%;
    height: 600px;
    padding: 30px 20px;
    overflow: auto;
    background-color: blue;
    border-radius: 20px;
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2);
  `;
  
