import { useState } from 'react';
import { useEffect } from 'react';
import '../App.css';
import sunny from '../../Images/sunny.png';
import rainy from '../../Images/rainy.png';
import cloudy from '../../Images/cloudy.png';
import Pin from '../../Images/pin.png';
import Search from '../../Images/search.png'
import Graph from './Graph';
import LowerGraph from './LowerGraph';
import { useRef } from 'react';

export const CurrentLocation=(p)=>{ 
  // console.log(p.days)
 const[list,setlist]=useState([]);
 const [change,setchange]=useState();
 const [Toggle,setToggle]=useState(true);
 const [Maximum,setMaximum]=useState();
 const [Humidity,setHumidity]=useState();
 const [Pressure,setPressure]=useState();
const [Sun,setSun]=useState();
const [Rise,setRise]=useState();
//  const [Obj,setObj]=useState({
//   max:"",
//   pressure:"",
//   humidity:"",
//   sunrise:"",
//   sunset:""
// });
const Obj={
  max:"",
  pressure:"",
  humidity:"",
  sunrise:"",
  sunset:""
}

//  const [info,setInfo]=useState();
// const info=useRef();
// const Pressure=useRef();
// const Humidity=useRef();
// const sunrise=useRef();
// const sunset=useRef();
// const image=useRef();
// const [image,setImage]=useState();
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

    const update=(el,i)=>{
      // console.log(el.temp.max.toFixed());
      setchange(i)
      setMaximum(el.temp.max.toFixed());
      setHumidity(el.humidity);
      setPressure(el.pressure);

const R=  new Date(el.sunrise*1000).toLocaleTimeString('IST', {hour: '2-digit', minute: '2-digit'});
setRise(R); 
const S=  new Date(el.sunset*1000).toLocaleTimeString('IST', {hour: '2-digit', minute: '2-digit'});
setSun(S);
     
     setToggle(false);
      

    }

return(
  <div className='App'>
     <div className="_flex">
        <input className="input_box" placeholder='search' type="text"/>
        <img className="Location_img" src={Pin}/>
        <img className="Search_img" src={Search}/>
     </div>
<div className="forecast">
{
list.map((el,i)=>{
  if(i==0){

  Obj.max=el.temp.max.toFixed();
  Obj.pressure=el.pressure;
  Obj.humidity=el.humidity;
  // image.current=el.weather[0].main;
  Obj.image=el.weather[0].main;
  // console.log(image)
  Obj.sunrise=new Date(el.sunrise*1000).toLocaleTimeString('IST', {hour: '2-digit', minute: '2-digit'});
  Obj.sunset=new Date(el.sunset*1000).toLocaleTimeString('IST', {hour: '2-digit', minute: '2-digit'});
  
  // console.log(Obj.max)
}
  const dateTimeStr = new Date(el.dt*1000).toLocaleString("en-US",{weekday:"long"}).slice(0,3);
  
  return(
<div key={i} className={change===i ? "_iforecast1":"_iforecast"} onClick={()=>{update(el,i)}}>
  <div className='Weather_info'>
      <div className="weekdays">{dateTimeStr}</div>
      <span className="span">{el.temp.max.toFixed()}&deg;</span>
      <span className="span">{el.temp.min.toFixed()}&deg;</span>
  </div>
    <div className="Weather_image">
      <img className="image1" src={(el.weather[0].main=="Clear")?sunny:(el.weather[0].main=="Rain")?rainy:cloudy}/>
    </div>
    <div className='Weather_status'>{el.weather[0].main}</div>
</div>
  )
})}
</div>
<div className='GraphDiv'>
        <div className="TempInfo">
          <div className='TempInfo1'>
            {Toggle?Obj.max:Maximum}&deg;C
            
          </div>
          <div className='TempInfo2'>
            <img style={{height:"80%",width:"100%"}}src={(Obj.image=="Clear")?sunny:(Obj.image=="Rain")?rainy:cloudy}/>
          </div>
          <div className='TempInfoimage'>
            
          </div>
        </div>
      <Graph/>
      <div className='TempDetails'>

  <div className='Pressure'>
    <p>
      Pressure<br/>
    <span className='Pressure_info'> {Toggle?Obj.pressure:Pressure} hpa</span>
    </p>
  </div>

  <div className='Humidity'>
    <p>
      Humidity<br/>
    <span className='Humidity_info'> {Toggle?Obj.humidity:Humidity} %</span>
    </p>
  </div>

    </div>

    <div className='TempDetails1'>
        <div className='sunrise'>
              <p>
                Sunrise<br/>
                <span className='sunrise_info'>{Toggle?Obj.sunrise:Rise}</span>
              </p>
        </div>
        <div className='sunset'>
                 <p>
                 Sunset<br/>
                 <span className="sunset_info">{Toggle?Obj.sunset:Sun}</span>
                 </p>
        </div>
    </div>
      <LowerGraph/>
      </div>
</div>
)
}