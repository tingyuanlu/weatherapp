import React from "react";

class Weather extends React.Component{
  render(){


    return(


      <div className="center">
        {this.props.city&&this.props.country && <p>Location: {this.props.city},{this.props.country}<img src={"https://www.countryflags.io/"+this.props.country+"/flat/64.png"}/></p>}
        {this.props.temperature && <p>Temperature: {this.props.temperature}°C<img src={"http://openweathermap.org/img/w/"+this.props.icon+".png"}/></p>}
        {this.props.temp_min &&<p> Min Temp:{this.props.temp_min}°C</p>}
        {this.props.temp_max &&<p> Min Temp:{this.props.temp_max}°C</p>}
        {this.props.speed &&<p> Wind speed:{this.props.speed}meter/sec</p>}


        {this.props.humidity&& <p>Humidity: {this.props.humidity}%</p>}
        {this.props.pressure&& <p>Pressure: {this.props.pressure}%</p>}

        {this.props.description&&<p>Conditions: {this.props.description}</p>}
        {this.props.error&&<p>Error: {this.props.error}</p>}
       </div>
    )
  }
}

export default Weather;
