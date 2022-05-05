import React, {useRef, useState, useEffect} from "react";
import TodoList from "./TodoList";
// import uuidv4 from "uuid/v4";

// the way react works is: it manages states
// that is why we need to set up states
function App() {
    const [todos, setTodo] = useState([])
    const todoNameRef = useRef()
    const LOCAL_STORAGE_KEY = 'todoApp.todos'

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if(storedTodos) setTodo(storedTodos)
    }, [])
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

    function handleAddTodo(e){
        const name = todoNameRef.current.value
        if(name === '') return
        setTodo(prevTodos => {
            return [...prevTodos, {id: 1, name: name,
                complete: false}]
        })
        todoNameRef.current.value = null;
    }



    // any javascript function can only return one thing
    // that is why you have to put everything in one div (or <>...</> "fragment")
  return (
      <>
          <h1>Hello there</h1>
          {/*return that components TodoList*/}
          <TodoList todos={todos}/>
          <input ref={todoNameRef} type="text"/>
          <button onClick={handleAddTodo}>Add Todo</button>
          <button>Clear Completed Todo</button>
          <div>0 left to do</div>
      </>


  );
}

export default App;
