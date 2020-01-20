import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Animated } from 'react-animated-css'
// import WeatherForm from './components/WeatherForm'


class Weather extends React.Component {
  constructor() {
    super() 
    this.state = {
      data: {
        city: undefined,
        country: {},
        main: {},
        temp_max: '',
        temp_min: '',
        description: '',
        sys: {},
        weather: [{}], 
        coord: {}
      },
      error: false
    }
  }
	

  componentDidMount() {
    const { city, country } = this.props.match.params
    console.log(city)
    console.log(country)
		
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=429736441cf3572838aa10530929f7cd`)
      .then(resp => this.setState({ data: resp.data }))
      .catch(err => this.setState({ errors: err.response.data.errors }))
			
  }
	
  render() {
    console.log(this.state.data)
    return <Animated animationIn="fadeInLeft" animationOut="fadeOut" isVisible={true}>
      <div className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            <div className="title is-size-1-mobile" id="home-title">{this.state.data.name}
              <div className="subtitle">{this.state.data.sys.country}</div>
              <div className="container is-size-2 is-size-3-mobile">
                <p>Temperature: {Math.floor(this.state.data.main.temp - 273.15)}</p>
                <p>Max Temperature: {Math.floor(this.state.data.main.temp_max - 273.15)}</p>
                <p>Min Temperature: {Math.floor(this.state.data.main.temp_min - 273.15)}</p>
                <p>{this.state.data.weather[0].description}</p>
                {/* <p>{this.state.data.coord.lat}</p>
              <p>{this.state.data.coord.lon}</p> */}
              </div>
              <Link className="button" id="sunMoonButton" to={`/sunandmoon/${this.state.data.coord.lat}/${this.state.data.coord.lon}`}> Sun and Moon </Link>
            </div>
          </div>
        </div>
      </div>
    </Animated>
  }

}

export default Weather 