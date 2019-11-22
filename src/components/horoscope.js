import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class Horoscope extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {
        dailyhoroscope: {
          Aries: '',
          Taurus: '',
          Gemini: '',
          Cancer: '',
          Leo: '',
          Virgo: '',
          Libra: '',
          Scorpio: '',
          Sagittarius: '',
          Capricorn: '',
          Aquarius: '',
          Pisces: ''
        }
      }
		}
	}
	
	componentDidMount() {
    const { lat, lon } = this.props.match.params
    console.log(lat)
    console.log(lon)
    axios.get('https://www.horoscopes-and-astrology.com/json')
      .then(resp => this.setState({ data: resp.data }))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }
  render() {
    console.log(this.state.data)
    console.log(this.state.moonData)
    return <div className="Section" id="moonPage">
      <div className="title is-size-1-mobile" id="home-title">Horoscope </div>
      <div className="columns">
        <div className="cards">
          <div className="card">
            <div className="media-content">
              <p className="card-header-title"> Aries: </p>
            </div>
            <div className="card-content">
              <div className="content">
                {this.state.data.dailyhoroscope.Aries}
                {/* Need to choose string up to a certain point everything before link use JS substrign-> var streetaddress= addy.substr(0, addy.indexOf(',')); */}
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="card">
            <div className="media-content">
              <p className="card-header-title"> Taurus: </p>
            </div>
            <div className="card-content">
              <div className="content">
                {this.state.data.dailyhoroscope.Taurus}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="">
          <div className="card">
            <div className="media-content">
              <p className="card-header-title"> Gemini: </p>
            </div>
            <div className="card-content">
              <div className="content">
                {this.state.data.dailyhoroscope.Gemini}
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="card">
            <div className="media-content">
              <p className="card-header-title"> Cancer: </p>
            </div>
            <div className="card-content">
              <div className="content">
                {this.state.data.dailyhoroscope.Cancer}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="">
          <div className="card">
            <div className="media-content">
              <p className="card-header-title"> Leo: </p>
            </div>
            <div className="card-content">
              <div className="content">
                {this.state.data.dailyhoroscope.Leo}
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="card">
            <div className="media-content">
              <p className="card-header-title"> Virgo: </p>
            </div>
            <div className="card-content">
              <div className="content">
                {this.state.data.dailyhoroscope.Virgo}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="">
          <div className="card">
            <div className="media-content">
              <p className="card-header-title"> Libra: </p>
            </div>
            <div className="card-content">
              <div className="content">
                {this.state.data.dailyhoroscope.Libra}
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="card">
            <div className="media-content">
              <p className="card-header-title"> Scorpio: </p>
            </div>
            <div className="card-content">
              <div className="content">
                {this.state.data.dailyhoroscope.Scorpio}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="">
          <div className="card">
            <div className="media-content">
              <p className="card-header-title"> Sagittarius: </p>
            </div>
            <div className="card-content">
              <div className="content">
                {this.state.data.dailyhoroscope.Sagittarius}
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="card">
            <div className="media-content">
              <p className="card-header-title"> Capricorn: </p>
            </div>
            <div className="card-content">
              <div className="content">
                {this.state.data.dailyhoroscope.Capricorn}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="">
          <div className="card">
            <div className="media-content">
              <p className="card-header-title"> Aquarius: </p>
            </div>
            <div className="card-content">
              <div className="content">
                {this.state.data.dailyhoroscope.Aquarius}
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="card">
            <div className="media-content">
              <p className="card-header-title"> Pisces: </p>
            </div>
            <div className="card-content">
              <div className="content">
                {this.state.data.dailyhoroscope.Pisces}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link className="button" id="sunMoonButton" to={'/'}> HOME </Link></div >
  }
}
export default Horoscope