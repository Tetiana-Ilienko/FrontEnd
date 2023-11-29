import React from 'react'

interface Iprops {
    taskName: string,
    index: number,
    done: boolean,
    remove: (index: number) => void,
    isDone: (e.ChangeEvent<HTMLInputElement>) => void
}



const ToDo = (props) => {
    return(
    <li key={index}>
    <span style={ check ? { textDecoration: 'line-through'} : {} }>
        {t.name}
    </span>
    <input
        type="checkbox"
        name="completed"
        id="isDone"
        onChange={handleIsDone}
    />
    <button onClick={() => handleRemoveTask(index)}>
        Remove
    </button>
</li>
);
}

export default ToDo