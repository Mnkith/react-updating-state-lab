import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {

  constructor() {
    super()

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  render() {
    return (
      <div>
        <button
          onClick={() => this.setState({ settings: { ...this.state.settings, bitrate: 12 } })}
          style={{ width: '100px', height: '50px' }}
          className='bitrate'>
          bitrate {this.state.settings.bitrate}
        </button>,
        <button
          onClick={() => this.setState({ settings: { ...this.state.settings, video: { ...this.state.settings.video, resolution: '720p' } } })}
          style={{ width: '100px', height: '50px' }}
          className='resolution'>
          resolution {this.state.settings.video.resolution}
        </button>
      </div>
    )
  }
}