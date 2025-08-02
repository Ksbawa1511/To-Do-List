import ToDoItem from './ToDoItem'

export default function ToDoList(props) {
    return (
        <>
            <div className='toDoListDiv'>
                <h2>Tasks:</h2>
                <div className='toDoListInternalDiv'>

                    {props.toDoItems.length ===0 ? <p className='noTaskP'>You haven't added any task yet!</p> : 
                        props.toDoItems.map((toDoItem) => {
                           return <ToDoItem key={toDoItem.key} item={toDoItem} deleteTask={props.deleteTask} saveToDo={props.saveToDo} taskCompleted={props.taskCompleted} />
                        })
                    }
                </div>
            </div>
        </>
    )
}