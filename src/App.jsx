import { useEffect, useState } from 'react'
import './App.css'
import  {CurrentLocation}  from '../components/currentlocation'

function App() {  
  const [input,setinput]=useState();
const[data,setData]=useState();
  
  let key="1afee05f35f4bbefee24aa8566dc0af7";

  const fetchapi=(e)=>{ //city wise
    setinput(e.target.value)
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=${key}&units=metric`)
    // fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${input}&units=metric&cnt=7&appid=${key}`)
    .then(res=>res.json())
    .then(data=>console.log(data))
  }
 
  return (
    <div className="App">
      <div className="_flex">
      <input className="input_box" placeholder='search' type="text" onChange={fetchapi}/>
      <img className="Location_img"src="https://weatherapp-gules-one.vercel.app/static/media/pin.0e41858db80c699cd8a2.png"/>
      <img className="Search_img" src="https://weatherapp-gules-one.vercel.app/static/media/search.1d92f967297920015306.png"/>
      </div>
      <CurrentLocation prop={key} days={data}/>
    </div>
  )
}
export default App
