const BASE_URL = 'https://jsonplaceholder.typicode.com/' ;



const usersBtn = document.getElementById('loadUsersBtn');
const postBtn = document.getElementById('loadPostsBtn');
const userList = document.getElementById('userList');
const postList = document.getElementById('postList');


// кнопка usersBtn

usersBtn.addEventListener('click',async() => {
   const users = await fetchUsers();
   displayUsers(users);
})

async function fetchUsers(){
    try {
      const response = await fetch(`${BASE_URL}users`);
    const users = await response.json();
    return users;
       } catch (error) {
      console.log(error);
    };
}

function displayUsers(users){
   userList.innerHTML = '';
   users.forEach(({name, phone }) => { 
      const li = document.createElement('li');
      const phoneFormatted = phone.split(' ')[0];
      li.textContent = name + ' ' + phoneFormatted;
      userList.appendChild(li)

      
   })
}

// кнопка postBtn

postBtn.addEventListener('click',async() => {
   const posts = await fetchPosts();
   displayPosts(posts);
})

async function fetchPosts(){
    try {
      const response = await fetch(`${BASE_URL}posts`);
    const posts = await response.json();
    return posts;
       } catch (error) {
      console.log(error);
    };
}

function displayPosts(posts){
   postList.innerHTML ='';
   posts.forEach(({title, body }) => { 
      const li = document.createElement('li');
      li.innerHTML =`
       <h4>${title}</h4>
       <p>${body}</p>
       `;

       postList.appendChild(li);

      
   })
}





