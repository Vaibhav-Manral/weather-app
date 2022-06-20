import { useState } from 'react';
import { useEffect } from 'react';
import '../src/App.css'

export const CurrentLocation=(p)=>{ 

    const[state,setstate]=useState();

const getlocation=()=>{ //current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      console.log("NS")
    }
  }

  useEffect(()=>{
    getlocation();
  },[])

  const showPosition=(position)=>{ //current location
    let lat=position.coords.latitude;
    let lon=position.coords.longitude;
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${p.prop}`)
    .then(res=>res.json())
    .then(data=>show(data)) 
    .catch(err=>console.log(err))
  }

  const show=(data)=>{
    console.log(data)
    setstate(data)
    console.log("state",state)
}
  return(
    <div className="forecast">

    </div>
  )
}