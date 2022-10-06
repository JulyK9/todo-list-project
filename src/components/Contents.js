import React, { useState } from "react";
import styled from "styled-components";
import { FaRegTrashAlt, FaCheckCircle, FaCircle } from "react-icons/fa";


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

  button:first-child {
    position: absolute;
    top: 17px;
    left: 15px;
    padding: 0;
    font-size: 18px;
    background: transparent;
    border: none;
    color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: all 200ms ease-in;

    &.checked {
      color: #fff;
      background: #ff7d36;
    }
  }

  button:last-child {
    position: absolute;
    top: 16px;
    right: 15px;
    padding: 0;
    font-size: 18px;
    background: transparent;
    border: none;
    /* color: rgba(0, 0, 0, 0.2); */
    cursor: pointer;
    transition: all 200ms ease-in;

    &.checked {
      color: #fff;
      background: #ff7d36;
    }
  }
`;

const Contents = ({ toDos, setToDos, handleDelete }) => {

  // const [check, setCheck] = useState(false); // 이걸 상태로는 관리할 수 없을까?

  const toggleCheck = (id) => {
    // id를 인자로 전달받아 
    setToDos((todo) => {
      return toDos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
        
      );
    })

    // check 상태 관리로 적용하려다 안된 부분들
    // const toggled = toDos.map((todo) => {
    //   return todo.id === id ? { ...todo, checked: setCheck(!todo.checked) } : todo
    // })
    // // console.log(toggled)
    // setToDos(toggled)
    
  }

  return (
    <main className="todo-contents">
      <ContentStyle className="output-container">
        <ul>
          {toDos.map((todo) =>
            !todo.checked ? (
              <li key={todo.id}>
                <button key={todo.id} onClick={() => toggleCheck(todo.id)}>
                  <FaCircle size={18} />
                </button>
                {todo.text}
                <button onClick={() => handleDelete(todo.id)}>
                  <FaRegTrashAlt size={18} />
                </button>
              </li>
            ) : (
              <li key={todo.id} className='checked'>
                <button className="checked" key={todo.id} onClick={() => toggleCheck(todo.id)}>
                  <FaCheckCircle />
                </button>
                <div>{todo.text}</div>
                <button className="checked" onClick={() => handleDelete(todo.id)}>
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
