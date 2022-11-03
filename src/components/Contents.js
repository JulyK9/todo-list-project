import React, { useState } from "react";
import styled from "styled-components";
import {
  FaRegEdit,
  FaRegTrashAlt,
  FaCheckCircle,
  FaCircle,
} from "react-icons/fa";
import EditInput from "./EditInput";
import axios from "axios";

const ContentBoxStyle = styled.main`
  height: 100vh;

  // 스크롤 설정해주고 없애기
  overflow: scroll;
  -ms-overflow-style: none; 

  &::-webkit-scrollbar {
    display: none;
    width: 0 !important;
  }
`;

const ContentStyle = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    width: 21rem;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 15px;
  }

  ul li {
    position: relative;
    height: 2rem;
    list-style: none;
    border: 1px solid #ff7d36;
    border-radius: 5px;
    padding: 10px 40px;
    background-color: #fdf8f5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: 500;
    letter-spacing: 0.5px;
    transition: all 200ms ease-in;

    &.checked {
      color: #fff;
      background: #ff7d36;
    }
  }

  .button-check {
    position: absolute;
    top: 17px;
    left: 15px;
    padding: 0;
    font-size: 18px;
    /* background: transparent; */
    border-radius: 50%;
    border: none;
    color: #ffb58e;
    cursor: pointer;
    transition: all 200ms ease-in;

    &:hover {
      color: #ff7d36;
    }

    &.checked {
      color: #fff;
      background: #ff7d36;
    }
  }

  .button-edit {
    position: absolute;
    top: 16px;
    right: 45px;
    padding: 0;
    font-size: 20px;
    background: transparent;
    border-radius: 50%;
    border: none;
    /* color: rgba(0, 0, 0, 0.2); */
    cursor: pointer;
    transition: all 200ms ease-in;

    &:hover {
      color: #ff7d36;
    }

    &.checked {
      color: transparent;
      background: #ff7d36;
      cursor: default;
    }
  }

  .button-trash {
    position: absolute;
    top: 16px;
    right: 15px;
    padding: 0;
    font-size: 18px;
    background: transparent;
    border-radius: 50%;
    border: none;
    /* color: rgba(0, 0, 0, 0.2); */
    cursor: pointer;
    transition: all 200ms ease-in;

    &:hover {
      color: #ff7d36;
    }

    &.checked {
      color: #fff;
      background: #ff7d36;
    }
  }

  .li-input {
    border: none;
    background-color: #fdf8f5;
    font-size: 16px;
    font-weight: 500;

    &:focus,
    :active {
      outline: none;
    }
  }
`;

const Contents = ({ toDos, setToDos, handleDelete, getToDos }) => {
  // const [check, setCheck] = useState(false); // 이걸 상태로는 관리할 수 없을까?

  // li의 input 상태 관리
  const [liText, setLiText] = useState("");


  // const [isEdit, setIsEdit] = useState(false);

  // console.log(toDos)

  // 완료여부 토글
  // const toggleCheck = (id) => {
  //   // id를 인자로 전달받아
  //   return setToDos(
  //     toDos.map((todo) => {
  //       return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
  //     })
  //   );
  //   // console.log(toDos)
  //   // check 상태 관리로 적용하려다 안된 부분들
  //   // const toggled = toDos.map((todo) => {
  //   //   return todo.id === id ? { ...todo, checked: setCheck(!todo.checked) } : todo
  //   // })
  //   // // console.log(toggled)
  //   // setToDos(toggled)
  // };

  const toggleCheck = async (id, checked) => {
    await axios.patch(`http://localhost:3001/todos/${id}`, {
      checked: !checked,
    });
    await getToDos();
  };

  // 수정기능 추가
  // const toggleEdit = (id) => {
  //   // console.log(id)
  //   // console.log(text)
  //   // li input text를 변경 가능한 상태로 바꾸고
  //   // setIsEdit(!isEdit);

  //   // 해당li(todo)의 id가 같으면
  //   // 그 li 상태만 수정 가능한 상태로 전환(isEdit)
  //   setToDos(
  //     toDos.map((todo) => {
  //       return todo.id === id ? { ...todo, isEdit: !todo.isEdit } : todo;
  //     })
  //   );
  // };
  const toggleEdit = async (id, isEdit, text) => {
    // console.log(text)
    await axios.patch(`http://localhost:3001/todos/${id}`, {
      isEdit: !isEdit,
      text: text,
    });
    await getToDos();
    setLiText(liText);
    await getToDos();
  };

  return (
    <ContentBoxStyle className="todo-contents">
      <ContentStyle className="output-container">
        <ul>
          {toDos &&
            toDos.map((todo) =>
              // console.log("toDos: ", toDos) // object
              // console.log(Array.isArray(toDos)) // true
              !todo.checked ? (
                <li key={todo.id}>
                  <button
                    className="button-check"
                    type="button"
                    onClick={() => toggleCheck(todo.id, todo.checked)}
                  >
                    <FaCircle />
                  </button>
                  {todo.isEdit ? (
                    <EditInput
                      toDos={toDos}
                      setToDos={setToDos}
                      liText={liText}
                      setLiText={setLiText}
                      todoId={todo.id}
                      todoText={todo.text}
                      todoEdit={todo.isEdit}
                      getToDos={getToDos}
                      toggleEdit={toggleEdit}
                    />
                  ) : (
                    todo.text
                  )}
                  {!todo.isEdit ? (
                    <button
                      className="button-edit"
                      type="button"
                      onClick={() =>
                        toggleEdit(todo.id, todo.isEdit, todo.text)
                      }
                    >
                      <FaRegEdit />
                    </button>
                  ) : null}
                  <button
                    className="button-trash"
                    type="button"
                    onClick={() => handleDelete(todo.id)}
                  >
                    <FaRegTrashAlt />
                  </button>
                </li>
              ) : (
                <li key={todo.id} className="checked">
                  <button
                    className="button-check checked"
                    type="button"
                    onClick={() => toggleCheck(todo.id, todo.checked)}
                  >
                    <FaCheckCircle />
                  </button>
                  <div>{todo.text}</div>
                  <button
                    className="button-edit checked"
                    type="button"
                    onClick={() => toggleEdit(todo.id, todo.isEdit, todo.text)}
                    disabled
                  >
                    <FaRegEdit />
                  </button>
                  <button
                    className="button-trash checked"
                    type="button"
                    onClick={() => handleDelete(todo.id)}
                  >
                    <FaRegTrashAlt />
                  </button>
                </li>
              )
            )}
        </ul>
      </ContentStyle>
    </ContentBoxStyle>
  );
};

export default Contents;
