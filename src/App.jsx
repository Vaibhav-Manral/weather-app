import { useEffect, useState } from 'react'
import './App.css'
import { IconButton } from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/icons' //install icons than use
import  {CurrentLocation}  from '../components/currentlocation'

function App() {  
  const [input,setinput]=useState();

  const handle=(e)=>{
    setinput(e.target.value)
  }
  let key="1afee05f35f4bbefee24aa8566dc0af7";

  const fetchapi=()=>{ //city wise
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=${key}`)
    .then(res=>res.json())
    .then(data=>console.log(data))
  }
 
  return (
    <div className="App">
      <div className="_flex">
      <input className="input_box" type="text" onChange={handle}/>
      <IconButton onClick={fetchapi} aria-label='Search database' colorScheme='blackAlpha' icon={<SearchIcon />} />
      </div>
      <CurrentLocation prop={key}/>
    </div>
  )
}
 
export default App
