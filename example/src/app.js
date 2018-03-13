// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import ReactMessages from 'react-messages'

class App extends React.PureComponent {
  state = {
    next: false,
    message: 'Just an initial message',
    newMessage: ''
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
    const { next, message, newMessage } = this.state

    return (
      <div>
        <h1>An example of react-messages</h1>
        <p>Fill the input and Press the button to render a new message</p>
        <input onChange={this.handleChange} value={newMessage} />
        <button onClick={this.handleClick}>New Message</button>
        <ReactMessages 
          message={message} 
          next={next} 
          error={true} 
          icon={'warning'}
          duration={100000}
        />
      </div>
    )
  }
}

const root = document.getElementById('root')

ReactDOM.render(<App />, root)