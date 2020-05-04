import React, {useContext} from 'react'
import axios from 'axios'
import { SmurfsContext } from '../contexts/SmurfsContext'


function deleteSmurf(e, id) {
   e.preventDefault();
   console.log("deleting");
   axios
     .delete(`http://localhost:3333/smurfs/${id}`)
     .then((res) => console.log(res))
     .catch((err) => console.log('delete error ', err))
     .finally(() => window.location.reload());
 }
 
 function SmurfsList() {
     const value = useContext(SmurfsContext)
 
     return (
         <div className='list'>
            {value.smurfs.map(smurf => (
             <div className='card' key={smurf.id}>
               <h3>Name: {smurf.name}</h3>
               <p>Age: {smurf.age}</p>
               <p>Height: {smurf.height}</p>
               <button onClick={(e) => deleteSmurf(e, smurf.id)}>Delete</button>
             </div>
           ))}
         </div>
     )
 }

export default SmurfsList