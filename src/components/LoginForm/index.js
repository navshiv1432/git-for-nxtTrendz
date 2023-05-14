// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showErrorMsg: false,
    errorMsg: '',
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitIt = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const fetchedData = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.setState({
        showErrorMsg: true,
        errorMsg: fetchedData.error_msg,
      })
    }
  }

  onChangeInputName = event => {
    this.setState({username: event.target.value})
  }

  onChangeInputPassword = event => {
    this.setState({password: event.target.value})
  }

  renderInputName = () => {
    const {username} = this.state
    return (
      <>
        <label className="label" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          className="name-input"
          onChange={this.onChangeInputName}
          value={username}
          id="username"
          placeholder="Username"
        />
      </>
    )
  }

  renderInputPassword = () => {
    const {password} = this.state
    return (
      <>
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          type="text"
          className="name-input"
          onChange={this.onChangeInputPassword}
          value={password}
          placeholder="password"
        />
      </>
    )
  }

  render() {
    const {showErrorMsg, errorMsg} = this.state
    return (
      <div className="login-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-age"
        />
        <div className="login-detail-cont">
          <form className="form" onSubmit={this.onSubmitIt}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="logo"
            />
            <div className="input-cont">{this.renderInputName()}</div>
            <div className="input-cont">{this.renderInputPassword()}</div>
            <button type="submit" className="btn">
              Login
            </button>
            {showErrorMsg && <p className="para-error">*{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
