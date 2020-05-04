import React, { useState } from 'react'
import axios from 'axios'


function SmurfsForm() {
    
    const [ smurfForm, setSmurfForm  ] = useState({ name:'', age: '', height:'' })


const handleOnchange = (e) => {

    setSmurfForm({...smurfForm, [e.target.name]: e.target.value })

}

const handleSubmit = (e) => {
    e.preventDefault()
  axios
    .post('http://localhost:3333/smurfs', smurfForm)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => window.location.reload())

}

    return (

        <form onSubmit={handleSubmit}>
            <h1>Add a new Smurf</h1>
            <label>
                <input 
                  name='name' 
                  type='text' 
                  value={smurfForm.value} 
                  onChange={handleOnchange} 
                  placeholder='name'>
                </input>
            </label>
            <label>
                <input 
                  name='age' 
                  type='number' 
                  values={smurfForm.value} 
                  onChange={handleOnchange} 
                  placeholder='age'>
                </input>
            </label>
            <label>
                <input 
                  name='height' 
                  type='text' 
                  values={smurfForm.value} 
                  onChange={handleOnchange} 
                  laceholder='height in cm'>
                </input>
            </label>
            <label>
                <button type='submit'>ADD</button>
            </label>
        </form>
    )
}

export default SmurfsForm