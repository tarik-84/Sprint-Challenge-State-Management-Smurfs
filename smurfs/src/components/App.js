import React, { useState, useEffect } from "react";
import { SmurfsContext } from '../contexts/SmurfsContext'
import axios from 'axios'
import SmurfsList from './SmurfsList'
import SmurfsForm from './SmurfsForm'
import './App.css'



const App = () => {

  const [smurfs, setSmurfs] = useState([])


  useEffect(() => {

      axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        setSmurfs(response.data)
      })
      .catch(err => console.log(err))
  },[])

  
    return (
      <div className="App">
        <SmurfsContext.Provider value={{ smurfs }}> 
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <SmurfsForm/>
          <SmurfsList/>
        </SmurfsContext.Provider>  
      </div>
     
    );
  }


export default App