const list = document.getElementById('userList');
const details = document.getElementById('userDetails');



fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) // переводим строку в объект
      .then(users => { // обрабатываем полученные данные
         users.forEach(user => { // проходим циклом по полученному массиву имен
            const li = document.createElement('li'); // создаем элемент списка
            li.textContent = user.name; // помещаем в него имя, полученное 
            
            //добавляем обработчик события  по клику
            li.addEventListener('click', () => 
            displayUserDetails() 
            )  
            list.appendChild(li); // добавляет новый элемент <li> (элемент списка) в конец родительского элемента list.
            
         })
      })
      .catch(error => {
           const li =document.createElement('li');
           li.textContent = error;
           list.appendChild(li);
      })
      .finally(console.log('Finish'));


     function displayUserDetails(user) {
      details.innerHTML = 
      <h2> $(user.name)</h2>


     }