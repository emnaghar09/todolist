import './App.css';
import Addtask from './components/Addtask';
import Task from './components/Task';

function App() {
  return (
    <div className="App">
      <div className="container">
      <h1 className="">TO DO TASKS LIST</h1>
      <Addtask />
      <Task />
      </div>
    </div>
  );
}

export default App;
// import Addtodolist from './components/addtodolist';
// import Todolist from './component/todolist';
// import {useState} from 'react'
// import {useSelector} from 'react-redux'

// import './App.css';

// function App() {
//   const [todos, setTodos] = useState([
//     { text: "save the galaxy", id: 1, isDone: false },
//     { text: "walk the cat ", id: 2, isDone: false },
//     { text: "attend the workshop ", id: 3, isDone: false },
//   ]);
//   const data = useSelector((state) => state.todos)
//    if(data.length < todos.length) {
//     setTodos(data)
//   }
//   return (
//     <div className="App">
//     <h1>to do app</h1>
//        <Addtodolist />
//        <Todolist todos={todos} />




//     </div>
//   );
// }

// export default App;
