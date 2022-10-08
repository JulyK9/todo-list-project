import { useState, useRef } from 'react';
import './App.css';
import { data } from './assets/data';
import Contents from './components/Contents';
import Input from './components/Input';
import Nav from './components/Nav';


function App() {
  const [text, setText] = useState("");

  // 투두 리스트 목록 상태 관리
  const [toDos, setToDos] = useState(data.todos);

  // 고유한 id의 생성문제는 일단 간략하게(실제로는 서버에서 id를 만들어준다고 함)
  // uuid를 연습으로 적용해보자(적용여부 현재:X)
  const nextId = useRef(2);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    text && addToDo(text); // (추가) text가 있는 경우만 할일을 추가하도록 text && 추가 작성
    setText("");
  };

  const addToDo = (text) => {
    setToDos([...toDos, { id: nextId.current, text, checked: false }]);
    nextId.current += 1;
  };

  const handleDelete = (id) => {
    // console.log(id)
    setToDos(toDos.filter((todo) => todo.id !== id));
  };

  // console.log(text)
  // console.log(toDos)

  return (
    <div className="App">
      <Nav />
      <Input
        text={text}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Contents toDos={toDos} setToDos={setToDos} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
