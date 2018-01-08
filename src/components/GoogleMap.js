import React, { Component } from 'react';

class GoogleMap extends Component {
   
   //invoked immediately after GoogleMap component is mounted
   componentDidMount() {
      const google = window.google;
      new google.maps.Map(this.refs.map, {
         zoom: 8,
         center: {
            lat: this.props.lat,
            lng: this.props.lon
         }
      });
   }
   render() {
      return <div ref = "map" className="map"/>;
   }
}

export default GoogleMap;