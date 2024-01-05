import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // const {users, setUser}=useState([])
  // useEffect(()=>{
  //   fetch('http://localhost:5000/users')
  //   .then(res=> res.json())
  //   .then(data=> setUser(data))
  // }, [])

  const handleUser=(event)=>{
      event.preventDefault() ;
      const form=event.target;
      const name=form.name.value
      const email=form.email.value;
      const number=form.number.value;
      const users={name, email, number}
      console.log(users);
     
     fetch("http://localhost:5000/users", {
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(users)
     })
     .then(res=>res.json())
     .then(data=> {
      console.log(data);
     })
  }
 
  return (
    <>
      <h1> Simple Curd Operation</h1>

      <div>
        <form onSubmit={handleUser} >
          <label> Name: </label>
          <input type="text" name='name' id='' />
          <br />
           <label> Email: </label>
          <input type="email" name='email' id='' />
          <br />
          <label> Number: </label>
          <input type="number" name='number' id='' />
          <br />
          <input type="submit" value="Add user" />
        </form>
      </div>
    </>
  )
}

export default App
