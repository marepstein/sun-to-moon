// import React from 'react'
// import { Link, withRouter } from 'react-router-dom'

// // Our navbar is a common component that we always want to show. It contains
// // Link components instead of <a> tags. This is so React Router can redirect
// // and update the route without reloading the page
// class Navbar extends React.Component {

//   constructor() {
//     super()
//     this.state = {
//       isOpen: false
//     }
//   }


//   // We can now open and close the navbar
//   toggleNavbar() {
//     this.setState({ isOpen: !this.state.isOpen })
//   }

//   // Check if the location pathname has changed (so the user has changed page),
//   // if it has, close the navbar
//   componentDidUpdate(prevProps) {
//     if (this.props.location.pathname !== prevProps.location.pathname) {
//       this.setState({ isOpen: false })
//     }
//   }

//   render() {
//     return <div className="navbar is-black">
//       <div className="container">
//         <div className="navbar-brand">
//           <Link className="navbar-item" to="/">Home</Link>
//           <a
//             role="button"
//             className={`navbar-burger burger ${this.state.isOpen ? 'is-active' : ''}`}
//             onClick={() => this.toggleNavbar()}
//             aria-label="menu"
//             aria-expanded="false"
//           >
//             <span aria-hidden="true"></span>
//             <span aria-hidden="true"></span>
//             <span aria-hidden="true"></span>
//           </a>
//         </div>
//           </div>
//         </div>
//   }

// }

// // Wraps the navbar with react router props
// export default withRouter(Navbar)