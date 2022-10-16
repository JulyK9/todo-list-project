import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FaRegEdit } from "react-icons/fa";
import axios from "axios";

const EditingInputStyle = styled.div`
  position: relative;
  /* font-size: 5px; */

  input {
    color: green;
    font-weight: 500;
    width: 220px;
  }

  button {
    position: absolute;
    top: 1px;
    right: 5px;
    padding: 0;
    font-size: 20px;
    background: transparent;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    color: green;
  }
`;

const EditInput = ({ toDos, setToDos, setLiText, liText, todoId, todoText, todoEdit, getToDos, toggleEdit }) => {
  // const [liText, setLiText] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    setLiText(todoText);
  }, []);

  const handleLiChange = (e) => {
    setLiText(e.target.value);
  };

  // 엔터키 눌렀을 때 제출이 적용되도록
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onClickEnter();
    }
  };

  // 포커스 아웃됐을때 제출이 적용되도록
  const handleBlur = () => {
    liText && toggleEdit(todoId, todoEdit, liText);
  }

  const onClickEnter = () => {
    liText && toggleEdit(todoId, todoEdit, liText);
  };

  // const handleLiEdit = (e) => {
  //   e.preventDefault();
  //   // liText && editToDo(text)
  //   // console.log("toDos: ", toDos)
  //   // console.log("liText", liText)

  //   // li의 id랑 일치하는(todoId, props로 받아옴) todo의 id를 toDos에서 인덱스 찾기
  //   const toDoIdx = toDos.findIndex((todo) => todo.id === todoId);
  //   // console.log(todoId) // 2
  //   // console.log(toDoIdx); // 1

  //   // toDos 를 원본 유지하면서 바꿔줌
  //   const newToDos = [
  //     ...toDos.slice(0, toDoIdx),
  //     { id: todoId, text: liText, checked: false, isEdit: false },
  //     ...toDos.slice(toDoIdx + 1),
  //   ];
  //   setToDos(newToDos);
  //   setLiText("");
  // };


  // const editToDo = (liText) => {
  //   setToDos([])
  // }

  return (
    <EditingInputStyle>
      <label>
        <input
          className="li-input"
          type="text"
          value={liText}
          ref={inputRef}
          onChange={handleLiChange}
          onKeyPress={handleKeyPress}
          onBlur={handleBlur}
          maxLength="15"
          placeholder="할일을 적어주세요"
        />
        <button onClick={onClickEnter}>
          <FaRegEdit />
        </button>
      </label>
    </EditingInputStyle>
  );
};

export default EditInput;
