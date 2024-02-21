import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  
 const [user, setUser]=useState({name:'defalut', email: 'ma@gmail.com'});
   const handleUser=(event)=>{
      event.preventDefault() ;
      console.log(user);
        // const form=event.target;
        // const name=form.name.value
        // const email=form.email.value;
        // const number=form.number.value;
        // const users={name, email, number}
      // console.log(users);

     fetch("http://localhost:5000/users", {
      method: 'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
     })
     .then(res=>res.json())
     .then(data=> {
      console.log(data);
      if(data.insertedId){
        alert(" User Added Successfully")
      }
     })
  }
    const handleInputBlur=event=>{
      const value=event.target.value;
      const field= event.target.name;
      const newUser={...user};
      newUser[field]=value;
      setUser(newUser)
    }
  return (
    <>
      <h1> Simple Curd Operation</h1>

      <Link to="/users"> <button > Show Users </button> </Link>
      <div>
        <form onSubmit={handleUser} >
          <label> Name: </label>
          <input onBlur={handleInputBlur} type="text" name='name' id='' />
          <br />
           <label> Email: </label>
          <input onBlur={handleInputBlur}  type="email" name='email' id='' />
          <br />
          <input type="submit" value="Add user" />
        </form>
      </div>
    </>
  )
}

export default App
