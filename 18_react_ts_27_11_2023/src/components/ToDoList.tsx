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

    const handleDeleteTask = (index : number) : void => { 
        const copyTaskList = [...taskList];
        copyTaskList.splice(index,1);
        setTaskList(copyTaskList)
        
    }

    const handleStrikeText = (e : ChangeEvent<HTMLInputElement>) : void =>{
        //              checkBox        предыдущий элемент(li)
        const liElement = e.target.previousElementSibling as HTMLLIElement;


        // as HTMLLIElement: это TypeScript-специфичная часть, которая говорит компилятору, что мы уверены, 
        // что предыдущий элемент — это HTMLLIElement (элемент списка). Это делается для того, 
        // чтобы избежать ошибок компиляции



    if (e.target.checked && liElement) {
        liElement.style.textDecoration = 'line-through';

        }else if(liElement)  {
            liElement.style.textDecoration = 'none'
        }

        
       
        
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
                <div key = {index} style={{ display: 'flex', alignItems: 'center' }}>
                    
                  <li >{t} </li>
                  
                  <input type ='checkbox'
                         onChange = {handleStrikeText}
                        
                  />
                   
                  <button onClick={() => handleDeleteTask(index) }>delete</button> 
                </div>
            ))}

        </ol>
    </div>
  )
}

export default ToDoList


//rafce | rce - создать скелет страницы