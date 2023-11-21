//  получили ссылки на необходимые элементы
const input = document.getElementById('taskInput');
const button = document.getElementById('addTask');
const list = document.getElementById('taskList');
   

/*Данный код добавляет слушатель событий для элемента с идентификатором list. 
Когда происходит клик внутри этого элемента (в любом его дочернем элементе),
 выполняется функция-обработчик (mauseEvents).*/

list.addEventListener('click', (e) => {
    // console.log(e);
    if (e.target.tagName === 'BUTTON') {
        // console.log('We clicked on button');
        e.target.parentElement.remove();
    }
    if (e.target.checked) {
        // console.log(e);\
        e.target.previousElementSibling.style.textDecoration = 'line-through';
    } else {
        e.target.previousElementSibling.style.textDecoration = 'none';
    }
})

// функция считывает значение, в введеное пользователем
const addTask = () => {
    const task = input.value.trim();
     if (task){
        const li = document.createElement('li');
        li.innerHTML =`
        <span>${task}</span><input type='checkbox'><button>Delete</button>
         `;
        list.appendChild(li);
     };
     input.value = '';
}

button.onclick = addTask;