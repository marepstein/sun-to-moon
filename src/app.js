import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import axios from 'axios'
// import Auth from './lib/auth'

import 'bulma'
import './styles/style.scss'


import Home from './components/Home'
import Weather from './components/Weather'
import SunAndMoon from './components/SunAndMoon'
import Horoscope from './components/horoscope'


// git project https://github.com/erikflowers/weather-icons


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/weather/:city/:country" component={Weather} />
      <Route path="/sunandmoon/:lat/:lon" component={SunAndMoon} />
			<Route path="/horoscope/" component={Horoscope} /> 
    </Switch>
  </BrowserRouter>
)

render() {
  const {
    prevChild,
    curChild,
    childPosition,
    animationCallback,
  } = this.state
  
  return (
    <Slider
      position={childPosition}
      animationCallback={animationCallback}
    >
      {prevChild || curChild}
    </Slider>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)