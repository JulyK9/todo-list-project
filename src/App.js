import { useState, useRef } from 'react';
import './App.css';
import Contents from './components/Contents';
import Input from './components/Input';
import Nav from './components/Nav';


function App() {

  const [text, setText] = useState("");
  const [toDos, setToDos] = useState([{
    id: 1,
    text: '후론트로 취업하기',
    checked: false,
  }]);

  const nextId = useRef(2)

  const handleChange = (e) => {
    setText(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addToDo(text);
    setText("")
  }

  const addToDo = (text) => {
    setToDos([...toDos, { id: nextId.current, text, checked: false }]);
    nextId.current += 1;
  }

  const handleDelete = (id) => {
    // console.log(id)
    setToDos(toDos.filter((todo) => todo.id !== id))
  }

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
