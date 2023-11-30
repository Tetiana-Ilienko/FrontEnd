import React, { useEffect, useState } from 'react'
import Comment from './Comment';


interface ICommentes {
    name: string;
    email: string;
    body: string;
}

const Commentes : React.FC = () : JSX.Element |null => {
    const[commentes, setCommentes] = useState<ICommentes[] | null>(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => setCommentes(data))
    })
  return (
    <ul>
        <h1>Comments</h1>
        {commentes &&
        commentes.map(({name, email, body}, index) =>(
            <Comment key ={index} name ={name} email ={email} body ={body}/>


        ))

        }

    </ul>
  )
}
export default Commentes