import React from 'react'
import axios from 'axios'

class Register extends React.Component {

  constructor() {
    super()
    this.state = {
      data: {
        email: '',
        username: '',
        password: '',
        passwordConfirmation: ''
      },
      errors: {}
    }
  }

  handleChange(e) {
    // Keep all the previous data, except the field we just modified
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    // Keep all the previous errors, but remove the one for the field we just updated
    const errors = { ...this.state.errors, [e.target.name]: '' }
    this.setState({ data, errors })
  }

  handleSubmit(e) {
    e.preventDefault()
    // An axios post request takes as first argument the url to post to,
    // second argument the data to post. The data we're keeping in state
    // matches what the API expects from us, so we can just post it as-is
    axios.post('https://cheesebored.herokuapp.com/register', this.state.data)
    // On success,take us to login
      .then(() => this.props.history.push('/login'))
    // If failed, show us the relevant error messages in our form
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  render() {
    return <section className="section">
      <div className="container">
        <div className="title">Register</div>
        {/* Form to complete registration */}
        <form className="form" onSubmit={(e) => this.handleSubmit(e)}>
          {/* We use bulma field, label and control classes for nice forms */}
          <div className="field">
            <label htmlFor="" className="label">
              Email
            </label>
            <div className="control">
              <input
                onChange={(e) => this.handleChange(e)}
                type="text"
                name="email"
                className="input"
              />
            </div>
            {/* Show errors if we recieve them from the API. The API is going
            to return an errors object with all the errors as key-value pairs,
            that we can just use to grab the right message for the right field */}
            {this.state.errors.email && <small className="help is-danger">
              {this.state.errors.email}
            </small>}
          </div>
          <div className="field">
            <label htmlFor="" className="label">
              Username
            </label>
            <div className="control">
              <input
                onChange={(e) => this.handleChange(e)}
                type="text"
                name="username"
                className="input"
              />
            </div>
            {this.state.errors.username && <small className="help is-danger">
              {this.state.errors.username}
            </small>}
          </div>
          <div className="field">
            <label htmlFor="" className="label">
              Password
            </label>
            <div className="control">
              <input
                onChange={(e) => this.handleChange(e)}
                type="text"
                name="password"
                className="input"
              />
            </div>
            {this.state.errors.password && <small className="help is-danger">
              {this.state.errors.password}
            </small>}
          </div>
          <div className="field">
            <label htmlFor="" className="label">
              Confirm password
            </label>
            <div className="control">
              <input
                onChange={(e) => this.handleChange(e)}
                type="text"
                name="passwordConfirmation"
                className="input"
              />
            </div>
            {this.state.errors.passwordConfirmation && <small className="help is-danger">
              {this.state.errors.passwordConfirmation}
            </small>}
          </div>
          <button className="button is-success">
            Complete registration
          </button>
        </form>
      </div>
    </section>
  }
}

export default Register