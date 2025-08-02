import { useState } from "react"

export default function ToDoItem(props) {
    const [isEditing, setIsEditing] = useState(false)
    const [editingTaskValue, setEditingTaskValue] = useState(props.item.toDo)
    function editToDo() {
        setIsEditing(true)
    }
    
    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            props.saveToDo(props.item.key, editingTaskValue, setIsEditing)
        } else if (e.key === 'Escape') {
            setEditingTaskValue(props.item.toDo)
            setIsEditing(false)
        }
    }
    
    
    return (
        <>
            <div className="toDoItem">
                <div>
                    {props.item.completed ? <p className="taskCompletedP">Task Completed</p> : ''}
                    {!isEditing ? <h3>{editingTaskValue} </h3> : <input className="editInput" type="text" value={editingTaskValue} onChange={(e) => setEditingTaskValue(e.target.value)} onKeyDown={handleKeyDown} />}
                </div>
                <div className="modifyButtonsDiv">
                    {/* Edit button */}
                    { !props.item.completed ? !isEditing ? <button title="edit" onClick={editToDo}><i class="fa-solid fa-pen-to-square fa-xl"></i></button> : 
                        <>
                            <button title="save" onClick={() => props.saveToDo(props.item.key,editingTaskValue,setIsEditing)}><i class="fa-regular fa-floppy-disk fa-xl"></i></button>
                            <button title="cancel" onClick={() => {setEditingTaskValue(props.item.toDo); setIsEditing(false)}}><i class="fa-solid fa-times fa-xl"></i></button>
                        </>
                    : ''}
                    {/* Mark as done button */}
                    {!props.item.completed ? <button title="done" onClick={() => props.taskCompleted(props.item.key)} > <i class="fa-solid fa-circle-check fa-xl"></i> </button> : "" }
                    {/* delete button. */}
                    <button title="delete" onClick={ () => props.deleteTask(props.item.key)}> <i class="fa-solid fa-trash fa-xl"></i> </button>
                </div>
            </div>
        </>
    )
}