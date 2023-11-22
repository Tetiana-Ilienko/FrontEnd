const list = document.getElementById('userList');
const details = document.getElementById('userDetails');


     //обращаемся к тренировочному серверу
fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) // переводим строку в объект
      .then(users => { // обрабатываем полученные данные
        
         users.forEach(user => { // проходим циклом по полученному массиву имен
            const li = document.createElement('li'); // создаем элемент списка

            li.classList.add('li')
            li.textContent = user.name; // помещаем в него имя, полученное 
            
            //добавляем обработчик события  по клику
            li.addEventListener('click', () => displayUserDetails(user)); 
            list.appendChild(li); // добавляет новый элемент <li> (элемент списка) в конец родительского элемента list.
            
         })
      })
      // информация по ошибке
      .catch(error => {
           const li =document.createElement('li');
           li.textContent = error;
           list.appendChild(li);
      })
      .finally(console.log('Finish'));


     function displayUserDetails({name, email, phone, website, company: {name: brand}, address}) {
         details.innerHTML = `
            <h2> ${name}</h2>
            <p><strong>Email: </strong> ${email}</p>
            <p><strong>Phone: </strong> ${phone}</p>
            <p><strong>Website: </strong> ${website}</p>
            <p><strong>Company: </strong> ${brand}</p>
            <p><strong>Address: </strong> ${address.city} ${address.street}</p>
            `
      
     }