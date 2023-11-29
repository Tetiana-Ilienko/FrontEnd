import React, { useEffect, useState } from 'react'

interface IUser {
  
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
      street: string,
      suite: string,
      city: string,
      zipcode: number
      }
    }

const Users = () => {
  const [userList, setUserList]= useState<IUser[] | null>(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
         .then(res => res.json())
         .then(data => {setUserList(data)});
  });




  return (
    <>
    {
      userList &&
      userList.map(u => (
      <>
      {u.name} {u.email} {u.address.city} {u.address.street}
      </>
      ))
    }

    </>
  )
}

export default Users