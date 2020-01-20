// import React from 'react'
// import { Link } from 'react-router-dom'
// // import axios from 'axios'

// class LocationForm extends React.Component {

// 	constructor() {

// 	}



// }


// axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
// .then(res => this.setState({ 
// 	city: `${res.name}, ${res.sys.country}`,
// 	country: res.sys.country,
// 	main: res.weather[0].main,
// 	celsius: this.calCelsius(res.main.temp),
// 	temp_max: this.calCelsius(res.main.temp_max),
// 	temp_min: this.calCelsius(res.main.temp_min),
// 	description: res.weather[0].description,
// 	coord: res.coord[0],
// 	coord_lon: res.coord[0]
// }))
// console.log(this.state)
// }

// )


// // class LocationForm extends React.Component {
	
// //   constructor() {
// //     super() 
// //     this.state = {
// //       data: {
// //         city: undefined,
// //         country: undefined,
// //         icon: undefined,
// //         main: undefined,
// //         celsius: undefined,
// //         temp_max: null,
// //         temp_min: null,
// //         description: '' 
// //       },
// //       errors: {}
// //     }
// //   }

	
// //   handleSubmit(e) {
// //     console.log(e.target.value)
// //     axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
// //       .then(res => this.setState({ 
// //         city: `${res.name}, ${res.sys.country}`,
// //         country: res.sys.country,
// //         main: res.weather[0].main,
// //         celsius: this.calCelsius(res.main.temp),
// //         temp_max: this.calCelsius(res.main.temp_max),
// //         temp_min: this.calCelsius(res.main.temp_min),
// //         description: res.weather[0].description,
// //         coord: res.coord[0],
// //         coord_lon: res.coord[0]
// //       }))
// //     console.log(this.state)
// //   }
	
// //   render() {

// //     return	<div className="section">
// //       <div className="container">
// //         <div className="field">
// //           <div className="control">
// //             <form className="form" onSubmit={(e) => this.handleSubmit(e)}>
// //               <div className="row">
// //                 <input 
// //                   type="text"
// //                   className="form-control"
// //                   placeholder="City"
// //                   name="city"
// //                   autoComplete="off"
// //                 />
// //                 <input 
// //                   type="text"
// //                   className="form-control"
// //                   placeholder="Country"
// //                   name="country"
// //                   autoComplete="off"
// //                 />
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //         {this.state.errors.location && <small className="help is-red"> 
// //           {this.state.errors.location}
// //         </small>}
// //       </div>
// //       <button className="button is-danger is-hovered" id="enterButton">Enter</button>
// //     </div>
// //   }


// export default LocationForm