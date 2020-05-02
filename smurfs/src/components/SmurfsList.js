import React, { useContext } from 'react'
import {SmurfsContext} from '../contexts/SmurfsContext'


const SmurfsList = () => {
    const {smurfs} = useContext(SmurfsContext);

    return (
       <div>
         {smurfs.map(item => (
            <div key={item.id}>
               <h3>Name: {item.name}</h3> 
               <h3>Age: {item.age}</h3>
               <h3>Height: {item.height}</h3>
            </div> 
         ))}  
       </div> 
    );
}

export default SmurfsList;