import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { FaCarrot } from "react-icons/fa";

const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .todo-header {
    margin-bottom: 20px;
  }

  .todo-input label {
    position: relative;
  }

  .todo-input input {
    width: 300px;
    height: 40px;
    /* border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5); */
    border: 1px solid #ff7d36;
    border-radius: 5px;
    padding: 8px 15px;
    font-size: 18px;

    &:focus,
    :active {
      outline: none;
      border: 3px solid #ff7d36;
      box-shadow: 0px 0px 10px 3px rgba(255, 125, 54, 0.32);
    }
  }

  .todo-input span {
    position: absolute;
    left: 10px;
    padding: 10px; /* 같은 padding 을 주니까 딱 들어맞음 */
    pointer-events: none; /* 기본 커서 옵션들이 비활성화 => 여기서 왜 해주지?? */
    font-size: 1em;
    color: rgba(255, 255, 255, 0.25);
    text-transform: uppercase;
    transition: all 0.3s; /* animation 속도 조절, 적용 위치 확인 */
  }

  /* input의 required 속성과 연계 => :valid 유효한 입력시 가상 클래스, invalid 무효한 입력시 가상 클래스 */
  .todo-input input:valid ~ span,      /* 유효한 입력이 있을 때 형제요소인 span 모두에 적용 */
  .todo-input input:focus ~ span {     /* 요소에 포커싱 된 동안 형제요소인 span 모두에 적용  */
    color: #ff7d36;
    transform: translateX(-28px) translateY(-22px); /* x축 기준 오른쪽으로 10px, y축 기준 위로 7px 이동 */
    font-size: 0.8em;
    font-weight: 500;
    padding: 0 20px; /* 왜 위아래 padding을 0을 줘야 딱 맞는걸까? */
    /* background-color: #1d2b3a; */
    letter-spacing: 0.07rem;
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
            placeholder="당근 해야할 일을 적어보세요"
            maxLength="15"
            required
            // onkeyDown 으로 진행시 중복 입력되는 오류 발생 : https://kwangsunny.tistory.com/33
          />
          <span>Things I have to do</span>
          <button onClick={onClickEnter}>
            <FaCarrot size={30} />
          </button>
        </label>
      </div>
    </InputStyle>
  );
};

export default Input;
