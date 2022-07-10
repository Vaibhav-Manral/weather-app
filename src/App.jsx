import { useEffect, useState } from 'react'
import './App.css'
import  {CurrentLocation}  from './components/currentlocation.jsx'
import Graph from './components/Graph';
import Pin from '../Images/pin.png'
import Search from '../Images/search.png'
import LowerGraph from './components/LowerGraph';
import { createContext } from 'react';


function App() {  
  
  const [input,setinput]=useState();
  // const[data,setData]=useState();
  
  let key="1afee05f35f4bbefee24aa8566dc0af7";

  return (
    
      <CurrentLocation k={key}/>
    
  )
}
export default App
