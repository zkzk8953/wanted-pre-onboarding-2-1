import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled, { css } from "styled-components";
import { loadingState, modalState, selectedTodoValueState, todoListState } from "../../atoms/atom";
import { AUTHORIZED_PERSON } from "../../constants/constants";
import { removeItemAtIndex, replaceItemAtIndex } from "../../utils/utils";

const Modal = () => {
  const setModalState = useSetRecoilState(modalState);
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const selectedTodoValue = useRecoilValue(selectedTodoValueState);
  const [todoValue, setTodoValue] = useState({
    id: -1,
    title: "",
    content: "",
    endDate: "",
    personInCharge: "",
    status: 0
  });
  const setLoadingState = useSetRecoilState(loadingState);
  const authorizedList =  AUTHORIZED_PERSON;
  const [searchNameList, setSearchNameList] = useState([]);

  const handleModal = () => {
    setModalState((prevValue) => prevValue !== true);
  }

  const handleChange = (e) => {
    switch (e.target.name) {
      case "title":
        setTodoValue({...todoValue, title: e.target.value});
        break;
      case "content":
        setTodoValue({...todoValue, content: e.target.value});
        break;
      case "date":
        setTodoValue({...todoValue, endDate: e.target.value});
        break;
      case "person":
        setTodoValue({...todoValue, personInCharge: e.target.value});
        break;
      default: 
        break;
    }
  }

  const handleAdd = () => {
    setLoadingState(true);

    setTimeout(() => {
      setTodoList(prevTodoList => [
        ...prevTodoList,
        {
          ...todoValue,
          id: prevTodoList ? prevTodoList.length + 1 : 1
        }
      ]);

      setLoadingState(false);
      handleModal();
    }, 500);
  }

  const handleEdit = () => {
    setLoadingState(true);

    const newList = replaceItemAtIndex(
      todoList, 
      todoList.findIndex(item => item.id === selectedTodoValue.id),
      todoValue
    );

    setTimeout(() => {
      setTodoList(newList);
      setLoadingState(false);
      handleModal();
    }, 500);
  }

  const handleRemove = () => {
    setLoadingState(true);

    const newList = removeItemAtIndex(
      todoList, 
      todoList.findIndex(item => item.id === selectedTodoValue.id),
      todoValue
    );

    setTimeout(() => {
      setTodoList(newList);
      setLoadingState(false);
      handleModal();
    }, 500);
  }
  
  const handleSearch = (e) => {
    setSearchNameList([]);
    const filteredList = [];

    authorizedList.forEach(item => {
      // eslint-disable-next-line no-eval
      if(item.name.match(eval("/" + e.target.value + "/i")) && e.target.value !== "") {
        filteredList.push(item);
      }
    });

    setSearchNameList([
      ...filteredList
    ]);
  }

  useEffect(() => {
    if(selectedTodoValue.id > 0) {
      setLoadingState(true);

      setTimeout(() => {
        setTodoValue({
          ...selectedTodoValue
        });

        setLoadingState(false);
      }, 500);
    }
  }, []);

  return (
    <>
      <ModalWrap onClick={handleModal} />
      <ModalContent>
        <ModalInput>
          <InputTitle>할 일</InputTitle>
          <InputForm type="text" name="title" value={todoValue.title} onChange={handleChange} />
        </ModalInput>
        <ModalInput>
          <InputTitle>내용</InputTitle>
          <textarea name="content" value={todoValue.content} onChange={handleChange} />
        </ModalInput>
        <ModalInput>
          <InputTitle>마감일</InputTitle>
          <InputForm type='datetime-local' name="date" value={todoValue.endDate} onChange={handleChange} />
        </ModalInput>
        <ModalInput>
          <InputTitle>담당자</InputTitle>
          <InputPersonWrap>
            <InputForm type="text" name="person" onChange={handleSearch} />
            { 
              searchNameList.map((item, index) => (
                <InputList key={item.id} i={index} >{item.name}</InputList>
              )) 
            }
          </InputPersonWrap>
        </ModalInput>
        <ButtonWrap>
          <Submit type="button" onClick={todoValue.id > 0 ? handleEdit : handleAdd}>{todoValue.id > 0 ? "수정" : "등록"}</Submit>
          <Delete type="button" onClick={handleRemove}>삭제</Delete>
        </ButtonWrap>
      </ModalContent>
    </>
  );
};

export default Modal;


const ModalWrap = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 6;
  background-color: rgba(0, 0, 0, 0.1); 
`;

const ModalContent = styled.form`
  width: 550px;
  height: 420px;
  padding: 20px 30px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 7;
  display: flex;
  flex-flow: column nowrap;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
`;

const ModalInput = styled.div`
  width: 100%;
  height: 80px; 
  margin-bottom: 20px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const InputTitle = styled.div`
  width: 30%;
`;

const InputForm = styled.input`
  width: 100%;
`;

const InputPersonWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  position: relative;
`;

const InputList = styled.div`
  width: 100%;
  height: 30px;
  border-radius: 3px;
  border: 1px solid #ccc;
  position: absolute;
  top: 50px;

  left: 0;
  z-index: 11;
  background-color: #eee;
`;

const ButtonWrap = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Submit = styled.button`
  width: 45%;
  height: 50px;
  border: 1px solid #ccc;
`;

const Delete = styled.button`
  width: 45%;
  height: 50px;
  border: 1px solid #ccc;
`;