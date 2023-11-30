import React from 'react'

interface ICommentProps{
    name: string;
    email: string;
    body: string;

}

const Comment : React.FC<ICommentProps> = ({name, email, body}): JSX.Element => {
  return (
    <li>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{body}</p>
    </li>
  )
}

export default Comment