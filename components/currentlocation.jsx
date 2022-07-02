import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import '../src/App.css'
import sunny from '../Images/sunny.png';
import rainy from '../Images/rainy.png';
import cloudy from '../Images/cloudy.png';


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
  // console.log(el.dt)
  const dateTimeStr = new Date(el.dt*1000).toLocaleString("en-US",{weekday:"long"}).slice(0,3);
  
  // console.log(d)
  return(
<div key={i} className="_iforecast">
  <div className='Weather_info'>
    <p className="weekdays">{dateTimeStr}</p>
    <span className="span">{el.temp.max.toFixed()}&deg;</span>
    <span className="span">{el.temp.min.toFixed()}&deg;</span>
    </div>
    <div className="Weather_image">
    <img className="image" src={(el.weather[0].main=="Clear")?sunny:(el.weather[0].main=="Rain")?rainy:cloudy}/>
    <p className='Weather_status'>{el.weather[0].main}</p>
      </div>
</div>
  )
})}
</div>
)
}