import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from './Chart';
import GoogleMap from './GoogleMap';

class WeatherList extends Component {

   renderWeather(cityData) {
      const name = cityData.city.name;
      const temps = cityData.list.map(weather => weather.main.temp);
      const pressures = cityData.list.map(weather => weather.main.pressure);
      const humidities = cityData.list.map(weather => weather.main.humidity);
      const { lat, lon } = cityData.city.coord;

      return (
         <tr key = {name} className = 'city-data'>
            <td><GoogleMap lat={lat} lon={lon} /></td>
            <td><Chart data = {temps} color = 'red' /></td>
            <td><Chart data = {pressures} color = 'blue' /></td>
            <td><Chart data = {humidities} color = 'green'/></td>
         </tr>
      );
   }

   render() {
      return (
      <table className="table table-hover">
         <thead>
            <tr>
               <th>City</th>
               <th style = {{color: 'red'}}>Temperature</th>
               <th style = {{color: 'blue'}}>Pressure</th>
               <th style = {{color: 'green'}}>Humidity</th>
            </tr>
         </thead>
         <tbody>
            {this.props.weather.map(this.renderWeather)}
         </tbody>
      </table>
      );
   }
};

const mapStateToProps = ({ weather }) => {
   return {
      weather
   };
};

export default connect(mapStateToProps)(WeatherList);


