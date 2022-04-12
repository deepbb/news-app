import { useState } from "react"
import "./Weather.css"
import Cloudy from "../../images/cloudy.png"
import Partly from "../../images/partlyclody.png"
const axios = require('axios');

function Weather() {
    const[city,setCity] = useState("")
    const [weather,setWeather] = useState("")
    const [condition,setCondition] = useState("")
    const [atmosphere, setAtmosphere] = useState("")
    const options = {
        method: 'GET',
        url: 'https://yahoo-weather5.p.rapidapi.com/weather',
        params: {location: city, format: 'json', u: 'f'},
        headers: {
          'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com',
          'X-RapidAPI-Key': 'a0be6d7951msh2b7b58e6879482fp1677b5jsncda4e4c95179'
        }
      };
      const  weatherData = async (e)=> {
        e.preventDefault()
        try{
        const res = await axios.request(options)
        setWeather(res.data)
        setCondition(res.data.current_observation.condition)
        setAtmosphere(res.data.current_observation.atmosphere)
        console.log(res.data);
        console.log(res.data.current_observation.condition);
        console.log(res.data.current_observation.atmosphere);
        } catch (err) {
          console.log(err);
        }
      }

      // const getTemp = ()=> {
      //     var celsiusData = ((condition.temperature - 32) * 5 /9).toFixed(2)
      //     console.log(celsiusData);
      // }

    

      

  return (
    <div className="weatherSection">
    <div className="weatherInput">
    <input className="input" type="text" 
    placeholder="Enter the City to get current weather"
     onChange={(e)=>setCity(e.target.value)} />
    <button className="btn" onClick={(e)=>weatherData(e)}>click</button>
    </div>
    {weather &&
    <>
    <p className="city">{weather.location.city}</p>
    </>}
    {condition && 
    <>
    {condition.text === "Cloudy" ? 
    <>
    <li className="items">{condition.temperature} deg Faranheit</li>
    <img src={Cloudy} alt="cloudy weather" />
    </>
     :
    <li className="items">{condition.temperature} deg Faranheit</li>
    }
    <li className="items">{condition.text}</li>
    </>
    }
    {condition && 
    <>
    {condition.text === "Partly Cloudy" ? 
    <>
    <li className="items">{condition.temperature} deg Faranheit</li>
    <img src={Partly} alt="cloudy weather" />
    </>
     :
    <li className="items">{condition.temperature} deg Faranheit</li>
    }
    <li className="items">{condition.text}</li>
    </>
    }
    {atmosphere && 
    <p>{atmosphere.humidity} % Humidity</p>
    }
    </div>
  )
}

export default Weather