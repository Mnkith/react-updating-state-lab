import React, { Component } from 'react'

export default class DigitalClicker extends Component {

  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  render() {
    return (
        <button
          onClick={() => this.setState(currentState => { return { timesClicked: currentState.timesClicked + 1 } })}
          style={{ width: '100px', height: '20px' }}>
          {this.state.timesClicked}
        </button>
        )
  }
}
