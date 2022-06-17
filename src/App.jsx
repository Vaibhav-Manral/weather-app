import { useEffect, useState } from 'react'
import './App.css'
import { IconButton } from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/icons' //install icons than use

function App() {  
  const [input,setinput]=useState();

  const handle=(e)=>{
    setinput(e.target.value)
  }
const show=(data)=>{
// console.log(data)
let list=data.list
list.forEach((el,i)=>{
  if(i==0){
console.log(list[i])
let div=document.createElement("div");

  }
  else if(i%8==0){
    console.log(list[i-1])
  }
})


}

  let key="1afee05f35f4bbefee24aa8566dc0af7";

  const fetchapi=()=>{ //city wise
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=${key}`)
    .then(res=>res.json())
    .then(data=>console.log(data))
  }
  useEffect(()=>{
    getlocation()
  },[])
const getlocation=()=>{ //current location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    console.log("NS")
  }
}
const showPosition=(position)=>{
  let lat=position.coords.latitude;
  let lon=position.coords.longitude;
  fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`)
  .then(res=>res.json())
  .then(data=>show(data))
  .catch(err=>console.log(err))
  
}
  return (
    <div className="App">
      <div className="_flex">
      <input className="input_box" type="text" onChange={handle}/>
      <IconButton onClick={fetchapi} aria-label='Search database' colorScheme='blackAlpha' icon={<SearchIcon />} />
      </div>
      <div className="forecast"></div>
    </div>
  )
}
 
export default App
