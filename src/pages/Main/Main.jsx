import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { loadingState, modalState, selectedTodoValueState } from "../../atoms/atom";
import { BOARD_LIST } from "../../constants/constants";
import Board from "../../components/Board/Board";
import Modal from "../../components/Modal/Modal";
import Pending from "../../components/Pending/Pending";

const Main = () => {
  const isOpenModal = useRecoilValue(modalState);
  const isLoading = useRecoilValue(loadingState);
  const setModalState = useSetRecoilState(modalState);
  const setSelectedTodoValue = useSetRecoilState(selectedTodoValueState);

  const handleModal = () => {
    setSelectedTodoValue((prevValue) => {
      return {};
    });
    setModalState((prevValue) => prevValue !== true);
  }

  return (
    <>
      <MainWrap>
        <MainBoard>
          {
            BOARD_LIST.map((board) => (
              <Board key={board.id} title={board.title} status={board.status} />
            ))
          }
        </MainBoard>
        <ButtonContent onClick={handleModal}>
          할일 추가
        </ButtonContent>
        { isOpenModal && <Modal  /> }
      </MainWrap>
      { isLoading && <Pending /> }
    </>
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

const ButtonContent = styled.button`
  width: 150px;
  height: 80px;
  position: absolute;
  top: 4%; left: 50%;
  transform: translateX(-50%);
  font-size: 23px;
  color: #fff;
  background-color: #189bfa;
  border-radius: 50px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
   &:hover {
    opacity: 0.7;
   }
`;