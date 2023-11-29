import React, { ChangeEvent, useState } from 'react'

interface ITask {
    name: string,
    completed: boolean
}

const ToDoList : React.FC = () : JSX.Element => {
    const [taskList, setTaskList] = useState<ITask[]>([]);
    const [task, setTask] = useState<ITask>({ name: '', completed: false });
    const [check, setCheck] = useState<boolean>(false)

    const handleAddTask = () => {
        setTaskList((prev) => [...prev, task]);
        setTask ({ name: '', completed: false });
    }

    const handleChangeTask =(e: ChangeEvent<HTMLInputElement>): void => {
        setTask({
            name: e.target.value,
            completed: false
        });
    }

    const handleIsDone = (e: ChangeEvent<HTMLInputElement>) => {
        // check = e.target.checked (Error! Локальное состояние не изменяется напрямую:
        // только с помощью специального метода)
        setCheck(e.target.checked);
    }

    const handleRemoveTask = (index: number): void => {
        const taskListCopy: ITask[] = [...taskList];
        taskListCopy.splice(index, 1);
        setTaskList(taskListCopy);
    }



  return (
    <div>
        <h1>ToDoList App</h1>
        <input 
             type="text" 
             placeholder='Enter a task ...' 
             onChange={ handleChangeTask}
             value={task.name}
        />
        <button onClick={handleAddTask}>Add task</button>
        <ol>
            {taskList.map((t, index) => ( 
                <li key ={index}>
                    <span style={ check ? {textDecoration: 'line-through'} : {} }>{t.name}</span>
                    <input type="checkbox"
                           name ="completed"
                           id="isDone"
                           onChange={handleIsDone}
                    />
                    <button onClick={() =>handleRemoveTask(index)}>
                        Delete
                    </button>
                </li>
                  
            ))}

        </ol>
    </div>
  )
}

export default ToDoList


//rafce | rce - создать скелет страницы