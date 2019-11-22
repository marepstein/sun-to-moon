import React from 'react'
import axios from 'axios'
import moment from 'moment' 
import { Link } from 'react-router-dom'
import { Animated } from 'react-animated-css'


const newDate = moment().format('DDMMYYYY')


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
    return <Animated animationIn="fadeInLeft" animationOut="fadeOut" isVisible={true}>
      <div className="Section" id="moonPage">
        <div className="container columns" id="moonContainer">
          <div className="title">
            <div className="title is-size-1-mobile" id="home-title">SUN & MOON</div>
            <div className="column2">
              <div className="columnIS">
                <h5>Sunrise: {this.state.data.sunrise}</h5>
                <h5>Sunset: {this.state.data.sunset}</h5>
                <h5>Day Length: {this.state.data.day_length}</h5>
                <h5>Moonrise: {this.state.data.moonrise}</h5>
                <h5>Moonset: {this.state.data.moonset}</h5>
                <h5>Moon Phase: {this.state.moonData.map(moon => moon.Phase)}</h5>
                <h5>Moon Type: {this.state.moonData.map(moon => moon.Moon)}</h5>
              </div>
              <div className="columnIS">
                <div className="moonAndSun is-three-quarters-mobile">
                  <div className="moon"></div>
                  <div className="sun"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <Link className="button" id="sunMoonButton" to={'/horoscope'}> Horoscope </Link>
      </div>
    </Animated>
  }
	
}

export default SunAndMoon