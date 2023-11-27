import React, { ChangeEvent, useState } from 'react'

const ToDoList = () => {

    const [taskList, setTaskList] = useState<string[]>([]);
    const [task, setTask] = useState<string>('');

    const handleAddTask = () => {
        setTaskList((prev) => [...prev, task]);
        setTask ('');

    }

    const handleChangeTask =(e: ChangeEvent<HTMLInputElement>): void => {
        setTask(e.target.value);
        
    }

    const handleDeleteTask = (index :any) : void => { // ???  как правильно задать тип(почему number  не подходит)
        const copyTaskList = [...taskList];
        copyTaskList.splice(index,1);
        setTaskList(copyTaskList)
        
    }

    const handleStrikeText = () =>{
        
    }





  return (
    <div>
        <h1>ToDoList App</h1>
        <input 
             type="text" 
             placeholder='Enter a task ...' 
             onChange={ handleChangeTask}
             value={task}
        />
        <button onClick={handleAddTask}>Add task</button>
        <ol>
            {taskList.map((t, index) => ( 
                  <li key = {index}>{t}
                  <input type ='checkbox'
                         onChange = {handleStrikeText}
                  />
                  <button onClick = {handleDeleteTask}>delete</button>
                    
                  </li>
                  
            ))}

        </ol>
    </div>
  )
}

export default ToDoList


//rafce | rce - создать скелет страницы