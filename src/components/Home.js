import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import { CSSTransitionGroup } from 'react-transition-group'


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
    return <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="section">
          <div className="container">
            <div className="title is-size-1-mobile" id="home-title" >Enter Location</div>
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
              <Link className="button is-danger is-hovered" id="enterButton" to={`/weather/${this.state.data.city}/${this.state.data.country}`}> Enter </Link>
            </form>
          </div>
        </div>
      </div>
    </section> 
  }

}
export default Home