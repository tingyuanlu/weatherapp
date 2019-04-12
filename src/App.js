import React, { Component } from 'react';
import Title from "./components/Title"
import Form from "./components/Form"
import Weather from "./components/Weather"
import './App.css';

const API_KEY="c397546bedbab8c7f0889eced4686172"


class App extends Component {
  state={
    temperature:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined,
    icon:undefined,
    temp_min:undefined,
    temp_max :undefined,
    speed:undefined
  }
  getWeather=async(e)=>{
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    console.log(api_call);
    const data= await api_call.json();
    if(city&&country){
      console.log(data);
        this.setState({
          temperature:data.main.temp,
          city:data.name,
          country:data.sys.country,
          humidity:data.main.humidity,
          pressure:data.main.pressure,
          temp_min:data.main.temp_min,
          temp_max :data.main.temp_max,
          speed:data.main.speed,
          description:data.weather[0].description,
          icon:data.weather[0].icon,
          error:""
        });
    }else{
      this.setState({
        temperature:undefined,
        city:undefined,
        country:undefined,
        humidity:undefined,
        pressure:undefined,
        temp_min:undefined,
        temp_max:undefined,
        speed:undefined,
        description:undefined,
        icon:undefined,
        error:"Please enter the value"
      });
    }
  }
  render() {
     return(
       <div >
        <Title/>
        <Form getWeather={this.getWeather}/>
        <Weather
         temperature={this.state.temperature}
         city={this.state.city}
         country={this.state.country}
         humidity={this.state.humidity}
         pressure={this.state.pressure}
         description={this.state.description}
         error={this.state.error}
         icon={this.state.icon}
         pressure={this.state.pressure}
         temp_min={this.state.temp_min}
         temp_max ={this.state.temp_max}
         speed={this.state.speed}
         />
       </div>
     );
  }
}

export default App;
