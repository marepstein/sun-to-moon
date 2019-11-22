import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Animated } from 'react-animated-css'


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
    return <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
      <div className="Section" id="moonPage">
        <div className="title is-size-2-mobile is-half-tablet" id="home-title">Horoscope</div>
        <div className="columns">
          <div className="cards">
            <div className="card">
              <div className="media-content">
                <p className="card-header-title is-size-1 is-size-2-mobile"> Aries: </p>
              </div>
              <div className="card-content">
                <div className="content">
                  {this.state.data.dailyhoroscope.Aries.substr(0, this.state.data.dailyhoroscope.Aries.indexOf('<'))}
                  {/* Need to choose string up to a certain point everything before link use JS substrign-> var strpart= str.substr(0, str.indexOf(',')); */}
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="card">
              <div className="media-content">
                <p className="card-header-title is-size-1 is-size-2-mobile"> Taurus: </p>
              </div>
              <div className="card-content">
                <div className="content">
                  {this.state.data.dailyhoroscope.Taurus.substr(0, this.state.data.dailyhoroscope.Taurus.indexOf('<'))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="">
            <div className="card">
              <div className="media-content">
                <p className="card-header-title is-size-1 is-size-2-mobile"> Gemini: </p>
              </div>
              <div className="card-content">
                <div className="content">
                  {this.state.data.dailyhoroscope.Gemini.substr(0, this.state.data.dailyhoroscope.Gemini.indexOf('<'))}
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="card">
              <div className="media-content">
                <p className="card-header-title is-size-1 is-size-2-mobile"> Cancer: </p>
              </div>
              <div className="card-content">
                <div className="content">
                  {this.state.data.dailyhoroscope.Cancer.substr(0, this.state.data.dailyhoroscope.Cancer.indexOf('<'))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="">
            <div className="card">
              <div className="media-content">
                <p className="card-header-title is-size-1 is-size-2-mobile"> Leo: </p>
              </div>
              <div className="card-content">
                <div className="content">
                  {this.state.data.dailyhoroscope.Leo.substr(0, this.state.data.dailyhoroscope.Leo.indexOf('<'))}
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="card">
              <div className="media-content">
                <p className="card-header-title is-size-1 is-size-2-mobile"> Virgo: </p>
              </div>
              <div className="card-content">
                <div className="content">
                  {this.state.data.dailyhoroscope.Virgo.substr(0, this.state.data.dailyhoroscope.Virgo.indexOf('<'))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="">
            <div className="card">
              <div className="media-content">
                <p className="card-header-title is-size-1 is-size-2-mobile"> Libra: </p>
              </div>
              <div className="card-content">
                <div className="content">
                  {this.state.data.dailyhoroscope.Libra.substr(0, this.state.data.dailyhoroscope.Libra.indexOf('<'))}
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="card">
              <div className="media-content">
                <p className="card-header-title is-size-1 is-size-2-mobile"> Scorpio: </p>
              </div>
              <div className="card-content">
                <div className="content">
                  {this.state.data.dailyhoroscope.Scorpio.substr(0, this.state.data.dailyhoroscope.Scorpio.indexOf('<'))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="">
            <div className="card">
              <div className="media-content">
                <p className="card-header-title is-size-1 is-size-2-mobile"> Sagittarius: </p>
              </div>
              <div className="card-content">
                <div className="content">
                  {this.state.data.dailyhoroscope.Sagittarius.substr(0, this.state.data.dailyhoroscope.Sagittarius.indexOf('<'))}
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="card">
              <div className="media-content">
                <p className="card-header-title is-size-1 is-size-2-mobile"> Capricorn: </p>
              </div>
              <div className="card-content">
                <div className="content">
                  {this.state.data.dailyhoroscope.Capricorn.substr(0, this.state.data.dailyhoroscope.Capricorn.indexOf('<'))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="">
            <div className="card">
              <div className="media-content">
                <p className="card-header-title is-size-1 is-size-1 is-size-2-mobile"> Aquarius: </p>
              </div>
              <div className="card-content">
                <div className="content">
                  {this.state.data.dailyhoroscope.Aquarius.substr(0, this.state.data.dailyhoroscope.Aquarius.indexOf('<'))}
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="card">
              <div className="media-content">
                <p className="card-header-title is-size-1 is-size-2-mobile"> Pisces: </p>
              </div>
              <div className="card-content">
                <div className="content">
                  {this.state.data.dailyhoroscope.Pisces.substr(0, this.state.data.dailyhoroscope.Pisces.indexOf('<'))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="card" id="homeCard">
            <div className="media-content">
              <Link className="card-header-title is-size- is-size-2-mobile" to={'/'}>Home</Link>
            </div>
          </div>
        </div>
      </div>
    </Animated>
  }
}
export default Horoscope

