import React from 'react'
import { Animated } from 'react-animated-css'
import { Link } from 'react-router-dom'



class Landing extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      redirect: false
    }
  }
	

  render() {
    console.log(this.state)
    return <Animated animationIn="fadeInLeft" animationOut="fadeOut" isVisible={true}>
      <div className="section">
        <section className="hero is-fullheight">
          <div className="hero-body">
            <div className="section">
              <div className="container">
                <Link className="Words" id="landing" to={'/home'}>
                  <div className="Words-line"><p>&nbsp;</p>
                    <p>Welcome to</p></div>
                  <div className="Words-line"><p>Welcome to</p>
                    <p>Moon</p></div>
                  <div className="Words-line"><p>Moon</p>
                    <p>& Sun</p></div>
                  <div className="Words-line"><p>& Sun</p>
                    <p>&nbsp;</p></div>	
                </Link>
              </div>
            </div> 
          </div>
        </section>
      </div>
    </Animated>			
  }

}

export default Landing