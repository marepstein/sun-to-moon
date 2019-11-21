import React from 'react'
import axios from 'axios'

let newDate = new Date()

class SunAndMoon extends React.Component {

  constructor() {
    super() 
    this.state = {
      data: {
        sunrise: '',
        sunset: '', 
        solar_noon: '',
        day_length: '',
        moonrise: '', 
        moonset: ''
      },
      moonData: [
        {
          Moon: [],
          Phase: ''
        }	
      ]
    }
  }


  componentDidMount() {
    const { lat, lon } = this.props.match.params
    console.log(lat)
    console.log(lon)
		
    axios.get(`https://api.ipgeolocation.io/astronomy?apiKey=c75530c7c6e2481ea5f88f9d6929c43e&lat=${lat}&long=${lon}`)
      .then(resp => this.setState({ data: resp.data }))
      .catch(err => this.setState({ errors: err.response.data.errors }))

    axios.get(`http://api.farmsense.net/v1/moonphases/?d=${newDate}`)
      .then(res => this.setState({ moonData: res.data }))
  }
	


  render() {
		console.log(newDate)
    console.log(this.state.data)
    console.log(this.state.moonData)
    return <div className="Section">
      <div className="container" id="moonContainer">
        <div className="title">
		  <p>Sunrise: {this.state.data.sunrise}</p>
          <p>Sunset: {this.state.data.sunset}</p>
          <p>Day Length: {this.state.data.day_length}</p>
          <p>Moonrise: {this.state.data.moonrise}</p>
          <p>Moonset: {this.state.data.moonset}</p>
          <p>Moon Phase: {this.state.moonData.map(moon => moon.Phase)}</p>
          <p>Moon Type: {this.state.moonData.map(moon => moon.Moon)}</p>
        </div>
      </div>
    </div>
  }
	
}

export default SunAndMoon