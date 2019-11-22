
import React from 'react'
import { Link } from 'react-router-dom'
import { Animated } from 'react-animated-css'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {
        city: '',
        country: ''
      },
      error: ''
    }
  }
  handleChange(e) {
    console.log(e.target.value)
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data, error: '' })
  }
  render() {
    // console.log(location)
    return <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="section">
            <div className="container">
              <div className="title is-size-1-mobile" id="home-title">Enter Location</div>
              <form className="form" onSubmit={(e) => this.handleSubmit(e)}>
                <div className="field">
                  <div className="control">
                    <input
                      onChange={(e) => this.handleChange(e)}
                      type="text"
                      placeholder="City"
                      name="city"
                      className="input"
                      // value={this.data.city}
                    />
                  </div>
                  {this.state.error.city && <small className="help is-danger">
                    {this.state.error.city}
                  </small>}
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      onChange={(e) => this.handleChange(e)}
                      type="text"
                      placeholder="Country"
                      name="country"
                      className="input"
                      // value={this.data.country}
                    />
                  </div>
                  {this.state.error.country && <small className="help is-danger">
                    {this.state.error.country}
                  </small>}
                </div>
                <Link className="button" id="buttons" to={`/weather/${this.state.data.city}/${this.state.data.country}`}> Enter </Link>
              </form>
            </div>
          </div>
        </div>
        <div className="social-icons">
          <a href="https://github.com/marepstein" target="blank"><img src="./images/github-brands.svg" width="82" height="86" title="GitHub" alt="GitHub"></img></a>
          <a href="https://github.com/UstinVaskin" target="blank"><img src="./images/github-brands.svg" width="82" height="86" title="GitHub" alt="GitHub"></img></a>
        </div>
      </section>
    </Animated>
  }
}
export default Home