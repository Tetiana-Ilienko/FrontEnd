
import React, { useEffect, useState } from 'react'
import Post from './Post';




interface IPost {
   
    title: string;
    body: string;
}

const Posts: React.FC = (): JSX.Element | null => {
    // создаем локальное состояние для хранения постов
    const [posts, setPosts] = useState<IPost[] | null>(null);
    // описываем загрузку
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data) )
    })
      return (
           
        <ul> 
            { posts &&
            
        posts.map( ({body, title},index) =>(
            <Post key ={index} body = {body} title= {title}/>
              
        ))
            
        }
        </ul>
    
  )
}

export default Posts