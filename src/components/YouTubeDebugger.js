import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {

    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    handleBitrate = (event) => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleResolution = (event) => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: "720p"
                }
            }
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <button 
                    onClick={this.handleBitrate}
                    className="bitrate"
                >
                        Bitrate
                </button>
                <button 
                    onClick={this.handleResolution}
                    className="resolution">
                        Resolution
                </button>
            </div>
        )
    }
}
