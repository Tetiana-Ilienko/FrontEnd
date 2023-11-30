import React from "react";


interface IPostProps {
   
    title: string;
    body: string;
}

const Post: React.FC<IPostProps> = ({ title, body}) : JSX.Element => {
  return (
    <li>
                <h2>{title}</h2>
                <p>{body}</p>
    </li>
  );
  }
export default Post;