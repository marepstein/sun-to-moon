![Image anchors 'MOON AND SUN'](https://i.imgur.com/oL0F346.png)


### Installation:

Clone or download the repo
Run npm i in the CLI
Run npm run serve in the CLI

### Overview:
This was a paired project using Rect router, JavaScript and a public API to build an astro themed app. Moon and Sun is a Web App that accurately shows the state and phase of the Sun and Moon in any place with a daily-updated horoscope. 
 
 We used an number of APIs to populate data, illustrated on a few pages linked together for a good UX. 
 
 ![Image of desktop 'MOON AND SUN'](https://i.imgur.com/H1MBT5W.gif)
 
https://marepstein.github.io/sun-to-moon/
 
 ### Collaborator:
 
 Ustin Vaskin

### Brief:
![Image anchors 'Suns and Moons'](https://i.imgur.com/0jQrBqp.png)

* Render a React App in the browser;
* Public API uses;
* Include separate HTML / scss / Components files;
* Use React for DOM manipulation;
* Deploy App online, using Github Pages, where the rest of the world can access it;
* Use semantic markup for HTML and CSS (adhere to best practices).
* A timeframe of 48 hours 


### Technologies Used:
![Image anchors 'Suns and Moons'](https://i.imgur.com/0jQrBqp.png)
* HTML;
* CSS3 with animation;
* JavaScript (ES6);
* JSX;
* Git;
* GitHub;
* React.
* Bulma. 

#### Approach Taken:

### Planning:

We quickly came up with the idea of an Astro themed app, so we were able to take some time to think of the UX, user-interaction and data flow. We researched potential API's and were careful to choose API's with enough data to work with. Once we had decided on this we were able to plan our design, which was a necessary step in order to distinguish the necessary Routes. 

We decided on sticking to a minimalist theme, whilst also ensuring the presentation of the API's data in an interesting way for users. Following this, we were able to begin the build.

### Build: 

1. Created home page and implement react router.

```
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Weather from './components/Weather'
import SunAndMoon from './components/SunAndMoon'
import Horoscope from './components/horoscope'
import Landing from './components/Landing'



const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} /> 
      <Route exact path="/home" component={Home} /> 
      <Route path="/weather/:city/:country" component={Weather} />
      <Route path="/sunandmoon/:lat/:lon" component={SunAndMoon} />
      <Route path="/horoscope/" component={Horoscope} /> 
    </Switch>
  </BrowserRouter>
)

```

## Components: 
├──Home.js
├──horoscope.js
├──Landing.js
├──LocationForm.js
├──SunAndMoon.js
├──Weather.js
└──WeatherForm.js

#### Weather 
## API
```
  componentDidMount() {
    const { city, country } = this.props.match.params
    console.log(city)
    console.log(country)
		
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=429736441cf3572838aa10530929f7cd`)
      .then(resp => this.setState({ data: resp.data }))
      .catch(err => this.setState({ errors: err.response.data.errors }))
			
  }
```

#### Sun and Moon 
## API
```
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
	
```
#### Horoscope
## API
```
  componentDidMount() {
    const { lat, lon } = this.props.match.params
    console.log(lat)
    console.log(lon)
    axios.get('https://www.horoscopes-and-astrology.com/json')
      .then(resp => this.setState({ data: resp.data }))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

```

## Render issue 
Transforming the data to a string in order to manipulate data so that only the necessary information from our API rendered.

```
 <div className="content">
 {this.state.data.dailyhoroscope.Aries.substr(0, this.state.data.dailyhoroscope.Aries.indexOf('<')) }
 {/* {<img src="https://horoscopes-and-astrology.com/images/aries.svg"></img>}	<img src ="http://localhost:3000/details/img/myImage.png" /> */}
 
<div>{<a href="https://horoscopes-and-astrology.com/aries?LANGUAGE=EN" target=" blank">MORE</a>}</div>
```

## Moving data 
We had to pass on data from one component to another. Being our first React project, this initially proved challenging. However, once we were able to m ake links between child and parent components, and a pattern emerged, it became easier. 

```
<Link className="button" id="sunMoonButton" to={`/weather/${this.state.data.city}/${this.state.data.country}`}> Enter </Link>
```

```
<Route path="/weather/:city/:country" component={Weather} />
```

```
componentDidMount() {
    const { city, country } = this.props.match.params
    console.log(city)
    console.log(country)
```

``` 
axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=429736441cf3572838aa10530929f7cd`)
      .then(resp => this.setState({ data: resp.data }))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }
```
  
### Design: 

In order to achieve smooth page transitions, we used react-animated-css, which was a simple yet effective method. Each component was wrapped in an '<Animated>' tag which had properties defined. 
	
```  return <Animated animationIn="fadeInLeft" animationOut="fadeOut" isVisible={true}>
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
  ```
 

### Reflection

### Wins

Gaining a better understanding of how an API is used, and using Axios to consume it and make it useful.
Developing on my knowledge of the React fundamentals.
Developing my teamworking skills by working with and reading another developers code.

### Challenges
Manipulating data from the API's into something consumed more easily.
Comprehending the use of state in React.

### Future Enhancement
 There are several potential future features that can be implemented, such as:

* Add Astro - Maps;
* Add Compass;
* Mobile version (Responsive).
