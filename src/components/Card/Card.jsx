import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { modalState, selectedTodoValueState } from "../../atoms/atom";

const Card = ({ details }) => {
  const setModalState = useSetRecoilState(modalState);
  const setSelectedTodoValue = useSetRecoilState(selectedTodoValueState);

  const handleModal = () => {
    setSelectedTodoValue(prevValue => {
      return { ...details };
    })
    setModalState((prevValue) => prevValue !== true);
  }

  const classifyStatus = (status) => {
    return status === 0 ? "대기" : status === 1 ? "진행중" : "완료"
  }

  return (
    <>
      <CardWrap onClick={handleModal} >
        <CardHeading>
          {details.title}
        </CardHeading>
        <CardContent>
          <CardOwner>
            {details.personInCharge}
          </CardOwner>
          <CardStatus>
            {classifyStatus(details.status)}
          </CardStatus>
        </CardContent>
      </CardWrap>
    </>
  );
};
  
  export default Card;
  

const CardWrap = styled.div`
  width: 100%;
  padding: 10px 5px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 15px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;
  
const CardHeading = styled.h1`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 25px;
  text-align: center;
`;

const CardContent = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
`;

const CardOwner = styled.span`
  width: 100%;
  text-align: center;
`;

const CardStatus = styled.span`
  width: 100%;
  padding: 2px 0;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  border-radius: 5px;
  color: #fff;
  background-color: coral;
`;