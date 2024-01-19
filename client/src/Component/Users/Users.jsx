import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
     const users=useLoaderData()

     const haldleDelete=_id=>{
            console.log("Delete", _id);
            fetch(`http://localhost:5000/users/${_id}`,{
             method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=> {
                console.log(data);
            })
     }
    return (
        <div>
            All Users Data {users.length}
      {
        users.map( data=>
           <div key={data._id} className='bg-slate-400 p-5 text-2xl'>
                <p > ID: {data._id }   </p> 
                <p> Name: {data.name } </p>
                <p> Email: {data.email } </p>
                <p> Number: {data.number } </p>
                <button 
                 onClick={ ()=>haldleDelete(data._id)}
                 > X</button>
             </div>
             )
      }
        </div>
    );
};

export default Users;