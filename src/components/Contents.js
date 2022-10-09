import React, { useState } from "react";
import styled from "styled-components";
import {
  FaRegEdit,
  FaRegTrashAlt,
  FaCheckCircle,
  FaCircle,
  FaRestroom,
} from "react-icons/fa";
import EditInput from "./EditInput";

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
      color: #fff;
      background: #ff7d36;
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
    font-size: 18px;
    font-weight: 500;

    &:focus,
    :active {
      outline: none;
    }
  }
`;

const Contents = ({ toDos, setToDos, handleDelete, isEdit, setIsEdit }) => {
  // const [check, setCheck] = useState(false); // 이걸 상태로는 관리할 수 없을까?

  // li의 input 상태 관리
  const [liText, setLiText] = useState("");

  const toggleCheck = (id) => {
    // id를 인자로 전달받아
    setToDos((todo) => {
      return toDos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      );
    });

    // check 상태 관리로 적용하려다 안된 부분들
    // const toggled = toDos.map((todo) => {
    //   return todo.id === id ? { ...todo, checked: setCheck(!todo.checked) } : todo
    // })
    // // console.log(toggled)
    // setToDos(toggled)
  };

  // 수정기능 추가
  const editToDo = (id) => {
    console.log(id)
    // console.log(text)
    // li input text를 변경 가능한 상태로 바꾸고
    setIsEdit(!isEdit);
    console.log(toDos);

    // toDos.map((todo) => 
    //   return todo.id === id ? { ...todo, text: setLiText }
    // )

    // 안되네... ㅠ.ㅠ
    setToDos((todo) => {
      return toDos.map((todo) => {
        // console.log("todoid: ",todo.id)
        // 해당li(todo)의 id가 같으면
        // 그 li input text 상태만 toDos.text 상태로 바꿔
        return  todo.id === id ? { ...todo, text: setLiText(todo.text) } : null
      });
    })
    
  };

  return (
    <main className="todo-contents">
      <ContentStyle className="output-container">
        <ul>
          {toDos.map((todo) =>
            !todo.checked ? (
              <li key={todo.id}>
                <button
                  className="button-check"
                  type="button"
                  key={todo.id}
                  onClick={() => toggleCheck(todo.id)}
                >
                  <FaCircle />
                </button>
                {isEdit ? (
                  <EditInput
                    toDos={toDos}
                    setToDos={setToDos}
                    liText={liText}
                    setLiText={setLiText}
                  />
                ) : (
                  todo.text
                )}
                <button
                  className="button-edit"
                  type="button"
                  onClick={() => editToDo(todo.id)}
                >
                  <FaRegEdit />
                </button>
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
                  key={todo.id}
                  onClick={() => toggleCheck(todo.id)}
                >
                  <FaCheckCircle />
                </button>
                <div>{todo.text}</div>
                <button
                  className="button-edit checked"
                  type="button"
                  onClick={() => editToDo(todo.text)}
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
    </main>
  );
};

export default Contents;
