import { useEffect, useState } from 'react'
import './App.css'
import  {CurrentLocation}  from './components/currentlocation.jsx'


function App() {  
  
  // const[data,setData]=useState();
  
  let key="1afee05f35f4bbefee24aa8566dc0af7";

  return (
    
      <CurrentLocation k={key}/>
    
  )
}
export default App
