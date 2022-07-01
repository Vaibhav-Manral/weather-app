import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import '../src/App.css'

export const CurrentLocation=(p)=>{ 
  // console.log(p.days)
const[list,setlist]=useState([]);

useEffect(()=>{
    getlocation();
  },[])

const getlocation=()=>{ //current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      console.log("NS")
    }
  }
const showPosition=(position)=>{ //current location
    let lat=position.coords.latitude;
    let lon=position.coords.longitude;
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${p.prop}&units=metric`)
    .then(res=>res.json())
    .then(data=>show(data)) 
    .catch(err=>console.log(err))
  } 
  const show=(data)=>{
    setlist(data.daily)
    console.log("Current Location",data.daily)
  }
// if(p.days!=undefined){
//   console.log(p.days)
// }
return(
<div className="forecast">
{
list.map((el,i)=>{
  return(
  <div key={i} className="_iforecast">
    {/* <h1>{el.dt_txt}</h1> */}
    <span className="span">max {el.temp.max}</span>
    <span className="span"> min {el.temp.min}</span>
    
</div>
  )
})}
</div>
)
}