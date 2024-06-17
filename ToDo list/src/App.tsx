import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ToDo from './Components/ToDo'
import Todo from './Components/Todo.css'
import Input from './Components/input'
import './App.css'



function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
  
    if (todo.trim() !== "") {
      setTodos([...todos, todo]); 
      setTodo("");
    }
  }

  return (
    <>
      <header>
        <h1 className='title'>ToDo List</h1>
      
      </header>

      <p>
        <input type="text" placeholder="Digite Aqui" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button onClick={addTodo}>Salvar</button>
      </p>

      <ul>
        {todos.map((todo, index) => {
          return <ToDo key={index} todo={todo} />;
        })}
      </ul>
    </>
  );
}

export default App;