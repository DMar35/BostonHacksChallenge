import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import NewTask  from './components/NewTask';
import TDList from './components/TDList';


function App() {
  const [getMessage, setGetMessage] = useState({})
  const [eventInput, setEventInput] = useState("");
  const [td, setTD] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5000/hello').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])

  return (
    <div className="App">
      <div>{getMessage.status === 200 ? 
        <h3>{getMessage.data.message}</h3>
        :
        <h3>LOADING</h3>}
      </div>
      <NewTask eventInput={eventInput} td={td} setTD={setTD} setEventInput={setEventInput}/>
      <TDList  setTD={setTD} td={td}/>
    </div>
  );
}

export default App;