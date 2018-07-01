import React, { Component } from 'react'
const google = window.google

export default class extends Component {
  geocodeAddress(geocoder, resultsMap) {
    geocoder.geocode({ address: this.props.card.location }, function(
      results,
      status
    ) {
      if (status === 'OK') {
        resultsMap.setCenter(results[0].geometry.location)
        new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        })
      } else {
        alert('Geocode was not successful for the following reason: ' + status)
      }
    })
  }
  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
      center: { lat: 40, lng: 79 },
      scrollwheel: false,
      zoom: 14
    })
    const geocoder = new google.maps.Geocoder()

    this.geocodeAddress(geocoder, this.map)
  }
  render() {
    return (
      <div
        className="card"
        style={{
          backgroundColor: `${this.props.bColor}`,
          color: `${this.props.tColor}`
        }}
      >
        <div className="card--text">
          <div className="text--container">
            <div className="text--header">
              <h2 className="text--title"> {this.props.card.summary} </h2>
            </div>
            <div className="text--description">
              <p>
                <b>Description: </b>
                {this.props.card.description}
              </p>
              <p>
                <b>Location: </b>
                {this.props.card.location}
              </p>
            </div>
          </div>
          <div id="map" ref="map" className="map_canvas map-init" />
        </div>
      </div>
    )
  }
}
