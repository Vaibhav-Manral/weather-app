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
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${p.prop}&units=metric`)
    .then(res=>res.json())
    .then(data=>show(data)) 
    .catch(err=>console.log(err))
  } 
  const show=(data)=>{
    setlist(data.list)
    console.log("Current Location",data.list)
  }
if(p.days!=undefined){
  console.log(p.days)
}
return(
<div className="forecast">
  <div className='_iforecast'>

  </div>
  <div className='_iforecast'>

</div>
<div className='_iforecast'>

</div>
<div className='_iforecast'>

</div>
<div className='_iforecast'>

</div>
<div className='_iforecast'>

</div>
<div className='_iforecast'>

</div>
{/* {
list.map((el,i)=>{
  if(i%8==0){
  return(
  <div key={i} className="_iforecast">
    <h1>{el.dt_txt}</h1>
    <span className="span">max {el.main.temp_max}</span>
    <span className="span"> min {el.main.temp_min}</span>
    <p className='pimage'><img src={`https://openweathermap.org/img/w/${el.weather[0].icon}.png`} /></p>
</div>
  )
}}) */}
</div>
)
}