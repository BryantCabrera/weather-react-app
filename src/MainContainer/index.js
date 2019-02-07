import React, { Component } from 'react';

class MainContainer extends Component {
    constructor () {
        super();

        this.state = {
            username: '',
            password: ''
        }
    }

    render () {
        return (
            <div>
                {this.props.forecasts.map((forecast, index) => 
                    <p key={index}>On {forecast.dt_txt}, the weather was {forecast.weather.description}.  The temperature was {forecast.temp} and the wind speed was {forecast.wind.speed}.</p>
                )}
            </div>
        )
    }
}

export default MainContainer;