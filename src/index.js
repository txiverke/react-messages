// @flow

import React from 'react'

import './css/index.css'

class ReactMessages extends React.PureComponent {
  state = {
    message: '',
    hidden: true
  }

  timeout = null

  props: {
    message: string,
    next: boolean,
    icon: string,
    error?: boolean,
    duration?: number,
  }

  static defaultProps = {
    icon: 'heart',
    error: false,
    duration: 2000,
  }

  componentDidMount() {
    const { next } = this.props
    
    if (next) {
      this.setValues(this.props)
    }
  }

  componentWillReceiveProps(nextProps: Object) {
    const { next, message } = nextProps

    if (this.state.message !== message && next) {
      this.setValues(nextProps)
    }
  }

  componentWillUnmount() {
    this.reset()
  }

  setValues(props: Object) {
    const { duration, message } = props
    
    this.reset()
    this.setState({ message, hidden: false })
    this.timeout = setTimeout(() => { 
      this.setState({ message: '', hidden: true }) 
    }, duration)
  }

  reset() {
    clearTimeout(this.timeout)
  }
 
  render() {
    const { error, next, icon } = this.props
    const { hidden, message } = this.state
    const style = error ? '-error' : ''
    const classHidden = hidden ? 'hidden' : ''

    if (!hidden && message) {
      return (
        <div className="rm-wrapper">
          <p className={`rm-item ${style} ${classHidden}`}>
            <span className={`rm-txt icon-rm-${icon}`}></span>
            <span className="rm-txt">{message}</span>
          </p>
        </div>
      )
    }

    return null
  }
}

export default ReactMessages