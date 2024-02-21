import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
     const users=useLoaderData()
        
     const hanldleDelete = (user) =>{
        const agree=window.confirm(`Are You sure Deleted This post:${user.name}`)
        // console.log(agree)
       if(agree){
        console.log("Delete",user. _id);
        fetch(`http://localhost:5000/users/${user._id}`,{
            method:'DELETE'
           })
           .then(res=>res.json())
           .then(data=>console.log(data));
       }
    }
    return (
        <div>
            All Users Data {users.length}

     <div className='grid flex grid-cols-3 gap-4 '>
     {
        users.map( user=>
           <div key={user._id} className='bg-slate-400 p-5 text-2xl mb-5 '>  
                <div >
                    <p > ID: {user._id}   </p> 
                    <p> Name: {user.name} </p>
                    <p className='max-w-full'> Email: {user.email} </p>
                    <p> Number: {user.number} </p>
                    <button 
                    onClick={ ()=>hanldleDelete(user)}
                    > X</button>
                </div>
             </div>
             )
             
      }
      
     </div>

        </div>
    );
};

export default Users;