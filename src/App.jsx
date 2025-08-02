import Header from './components/Header'
import ToDoList from './components/ToDoList'
import './index.css'

import { useState } from 'react'

function App() {
  const [ toDoItems, setToDoItems ] = useState([])
  function deleteTask(key) {
    const updateToDoItems = toDoItems.filter((item) => item.key!== key)
    setToDoItems([...updateToDoItems])
  }
  function saveToDo(key, updatedValue, setIsEditing) {
    if (updatedValue.trim() === '') {
      return; // Don't save empty tasks
    }
    const updateToDoItems = toDoItems.map((item) => {
      if(item.key===key) {
        item.toDo = updatedValue.trim()
      }
      return item
    })
    setToDoItems([...updateToDoItems])
    setIsEditing(false)
    }
    function taskCompleted(key) {
      const updatedItems = toDoItems.map((item) => {
        if(item.key === key) {
          item.completed = true;
        }
        return item;
      })
      setToDoItems([...updatedItems])
    }
  return (
    <>
      <Header toDoItems={toDoItems} setToDoItems={setToDoItems} />
      <ToDoList toDoItems={toDoItems} deleteTask={deleteTask} saveToDo={saveToDo} taskCompleted={taskCompleted} />
    </>
  )
}

export default App

