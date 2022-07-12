import { useState } from 'react';
import { useEffect } from 'react';
import '../App.css';
import sunny from '../../Images/sunny.png';
import rainy from '../../Images/rainy.png';
import cloudy from '../../Images/cloudy.png';
import Pin from '../../Images/pin.png';
import Search from '../../Images/search.png'

import { createContext } from 'react';
import { useContext } from 'react';
import Graph from './Graph';
import LowerGraph from './LowerGraph';
import { useRef } from 'react';


// export const Weatherdata=createContext();


export const CurrentLocation=(p)=>{ 
  // console.log(p.days)
 const[list,setlist]=useState([]);
 

//  const [info,setInfo]=useState();
const info=useRef();
const Pressure=useRef();
const Humidity=useRef();
const sunrise=useRef();
const sunset=useRef();
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
   
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${p.k}&units=metric`)
    .then(res=>res.json())
    .then(data=>show(data)) 
    .catch(err=>console.log(err))
  } 
  const show=(data)=>{
    setlist(data.daily)
    console.log("Current Location",data.daily)
  }
return(
  <div className='App'>
     <div className="_flex">
        <input className="input_box" placeholder='search' type="text"/>
        <img className="Location_img"src={Pin}/>
        <img className="Search_img" src={Search}/>
     </div>
<div className="forecast">
{
list.map((el,i)=>{
  if(i==0){
 info.current=`${el.temp.max.toFixed()}`;
 Pressure.current=`${el.pressure}`;
 Humidity.current=`${el.humidity}`;

  }
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
<div className='GraphDiv'>
        <div className="TempInfo">
{info.current}
        </div>
      <Graph/>
      <div className='TempDetails'>

<div className='Pressure'>
<p>
  Pressure<br/>
<span className='Pressure_info'>{Pressure.current} hpa</span>
</p>
</div>

<div className='Humidity'>
<p>
  Humidity<br/>
<span className='Humidity_info'>{Humidity.current}%</span>
</p>
</div>

      </div>
      <div className='TempDetails1'>

      </div>
      <LowerGraph/>
      </div>
</div>
)
}