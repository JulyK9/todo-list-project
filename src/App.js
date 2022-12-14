import { useState, useEffect } from "react";
import './App.css';
// import { data } from './assets/data';
import Contents from './components/Contents';
import Input from './components/Input';
import Nav from './components/Nav';
import Footer from "./components/Footer";
import axios from 'axios';
import styled from "styled-components";

const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  /* width: 0 auto; */
`;


function App() {
  const [text, setText] = useState("");

  // 투두 리스트 목록 상태 관리
  // const [toDos, setToDos] = useState(data.todos);
  const [toDos, setToDos] = useState([]);

  // 고유한 id의 생성문제는 일단 간략하게(실제로는 서버에서 id를 만들어준다고 함)
  // uuid를 연습으로 적용해보자(적용여부 현재:X)
  // const nextId = useRef(2);

  // json-server로 data 요청해서 todos 받아오기: 방식1
  // useEffect(() => {
  //   axios.get('http://localhost:3001/todos')
  //     .then((res) => {
  //       setToDos(res.data)
  //     })
  //     .catch((error) => {
  //       console.error("error", error);
  //     })
  // }, [])

  // json-server로 data 요청해서 todos 받아오기: 방식2
  const getToDos = async () => {
    const { data } = await axios.get("http://localhost:3001/todos");
    // await axios.get("http://localhost:3001/todos")
    // console.log(Array.isArray(data))
    // console.log(data)
    setToDos(data);
    // .then((res) => {
    //   setToDos(res.data);
    // })
    // .catch((error) => {
    //   console.error("error", error);
    // });
  };

  // useEffect(() => {
  //   (async () => {
  //     await getToDos();
  //   })();
  // }, []);

  useEffect(() => {
    getToDos();
  }, []);

  // console.log(toDos)

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    text && addToDo(text); // (추가) text가 있는 경우만 할일을 추가하도록 text && 추가 작성
    setText("");
    getToDos();
  };

  // add todos
  const addToDo = async (text) => {
    await axios
      .post("http://localhost:3001/todos", {
        text,
        checked: false,
        isEdit: false,
      })
      .then((res) => {
        // console.log("받아오는 객체 확인: ", res.data); // 문제점 확인 => 가져온 data가 객체 형태임
        // console.log(toDos); 
        // setToDos(res.data); // [에러의 원인] 잘못되었던 방법!!
        setToDos([...toDos, res.data]); 
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  // const addToDo = (text) => {
  //   setToDos([
  //     ...toDos,
  //     { id: nextId.current, text, checked: false, isEdit: false },
  //   ]);
  //   nextId.current += 1;
  // };

  // const handleDelete = (id) => {
  //   // console.log(id)
  //   setToDos(toDos.filter((todo) => todo.id !== id));
  // };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/todos/${id}`);
    await getToDos();
  };

  // console.log(text)
  // console.log(toDos)

  return (
    <AppStyle className="App">
      <Nav className="app-nav" />
      <Input
        className="app-input"
        text={text}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {toDos && (
        <Contents
          className="app-contents"
          toDos={toDos}
          setToDos={setToDos}
          handleDelete={handleDelete}
          getToDos={getToDos}
        />
      )}
      <Footer className="app-footer" />
    </AppStyle>
  );
}

export default App;
