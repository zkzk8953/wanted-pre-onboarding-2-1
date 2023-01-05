import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { todoListState } from "../../atoms/atom";
import Card from "../Card/Card";

const Board = ({ title, status }) => {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <BoardWrap>
        <BoardHeading>{title}</BoardHeading>
        <BoardContent>
          {
            todoList?.map((todo) => (
              status === todo.status ? <Card key={todo.id} details={todo} /> : null
            ))
          }
        </BoardContent>
      </BoardWrap>
    </>
  );
};

export default Board;

const BoardWrap = styled.div`
  width: 30%;
  height: 100%;
`;

const BoardHeading = styled.h1`
  width: 100%;
  height: 80px;
  font-size: 45px;
  line-height: 80px;
  text-align: center;
  margin-bottom: 20px;
`;

const BoardContent = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  padding: 30px 15px;
  display: flex;
  flex-flow: column nowrap;
  overflow: auto;
  border-radius: 20px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2);
`;
  