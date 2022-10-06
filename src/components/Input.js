import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { FaCarrot } from "react-icons/fa";

const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .todo-input label {
    position: relative;
  }

  .todo-input input {
    width: 300px;
    height: 50px;
    /* border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5); */
    border: 1px solid #ff7d36;
    border-radius: 5px;
    padding: 8px 15px;
    font-size: 20px;

    &:focus,
    :active {
      outline: none;
      border: 3px solid #ff7d36;
      box-shadow: 0px 0px 10px 3px rgba(255, 125, 54, 0.32);
    }
  }

  .todo-input button {
    position: absolute;
    margin: 0;
    top: -5px;
    right: 10px;
    background: transparent;
    border: none;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;

    &:hover {
      color: #ffb58e;
      &:active {
        transform: scale(1.1);
        color: #ff7d36;
      }
    }
  }
`;

const Input = ({ text, handleChange, handleSubmit }) => {
  const inputRef = useRef();

  useEffect(() => {
    // console.log(inputref);
    inputRef.current.focus();
  }, []);


  // 엔터키 눌렀을 때 제출이 적용되도록
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      onClickEnter(e);
    }
  };

  const onClickEnter = (e) => {
    handleSubmit(e);
  };

  return (
    <InputStyle>
      <div className="todo-header">
        <h1>Carrot To Do</h1>
      </div>
      <div className="todo-input">
        <label>
          <input
            type="text"
            value={text}
            onChange={handleChange}
            ref={inputRef}
            onKeyPress={handleKeyPress}
            // onkeyDown 으로 진행시 중복 입력되는 오류 발생 : https://kwangsunny.tistory.com/33
          />
          <button onClick={onClickEnter}>
            <FaCarrot size={30} />
          </button>
        </label>
      </div>
    </InputStyle>
  );
};

export default Input;
