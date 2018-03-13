// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import ReactMessages from 'react-messages'

class App extends React.PureComponent {
  state = {
    next: false,
    message: 'Just an initial message',
    newMessage: '',
    icon: 'heart',
    duration: 1,
    error: false
  }

  handleSelect = (e) => {
    const icon = e.target.value
    this.setState({ icon, next: false })
  }

  handleDuration = (e) => {
    const duration = Number(e.target.value) 
    this.setState({ duration, next: false })
  }

  handleError = (e) => {
    const error = e.target.value
    this.setState({ error, next: false })
  }

  handleChange = (e) => {
    const newMessage = e.target.value

    this.setState({ newMessage, next: false })
  }

  handleClick = () => {
    const { newMessage } = this.state

    this.setState({
      message: newMessage,
      newMessage: '',
      next: true
    })
  }

  render() {
    const { next, message, newMessage, icon, duration, error } = this.state
    const durationInMilliseconds = duration * 1000

    return (
      <div>
        <h1>'react-messages' example</h1>
        <hr />
        <h2>Options:</h2>
        <label htmlFor='icon'>
        Choose the icon:
          <select onChange={this.handleSelect}>
            <option default value="heart">Heart</option>
            <option value="warning">Warning</option>
            <option value="info">Info</option>
            <option value="thumbs-up">Thumbs up</option>
            <option value="thumbs-down">Thumbs down</option>
          </select>
        </label>
        <br />
        <label htmlFor="duration">
          Choose the duration:
          <input 
            onChange={this.handleDuration}
            value={duration}
            type='range' 
            min='1' 
            max='10' 
            step='1' 
          />
          <span>{duration} seconds</span>
        </label>
        <br />
        <label htmlFor="error">
          Choose if the message is an error:
          <input onChange={this.handleError} type="radio" name="error" value="true" checked={error && 'checked' } /> Is an error &nbsp;
          <input onChange={this.handleError} type="radio" name="error" value="false" checked={!error && 'checked' }/> Is not an error
        </label>
        <p>Fill the input and Press the button to render a new message</p>
        <input onChange={this.handleChange} value={newMessage} />
        <button onClick={this.handleClick}>New Message</button>
        <ReactMessages 
          message={message} 
          next={next} 
          error={error} 
          icon={icon}
          duration={durationInMilliseconds}
        />
      </div>
    )
  }
}

const root = document.getElementById('root')

ReactDOM.render(<App />, root)