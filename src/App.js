import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import MainContainer from './MainContainer';

class App extends Component {
  constructor () {
    super();

    this.state = {
      logged: false,
      username: '',
      forecasts: []
    }
  }

  getForecasts = async () => {
    try {
      const forecasts = await fetch('http://api.openweathermap.org/data/2.5/forecast?id=5368381&APPID=226346359af5f0ba643e61cccef4b568');
// 'api.openweathermap.org/data/2.5/weather?q=LosAngeles'

      // console.log(forecasts, ' this is forecasts');

      if (!forecasts.ok) {
        throw Error(forecasts.statusText);
      }

      const forecastsParsedJson = await forecasts.json();

      // console.log(forecastsParsedJson, ' this is parsed forecastss');

      //forecasts: object.list
      //date/time stamp: object.list[0].dt_txt
      //temp: object.list[0].temp  //or temp_min temp_max
      //weather: object.list[0].weather.description //or .main
      //wind: object.list[0].wind.speed //or .deg

      this.setState({
        forecasts: forecastsParsedJson.list,
        loading: false
      });

    } catch (err) {
      console.log(err, ' This is the error in catch block');
    }
  }

  componentDidMount = () => {
    this.getForecasts();
  }

  login = (user) => {
    this.setState({username: user, logged: true});
    console.log(this.state);
  }

  logout = () => {
    this.setState({
      logged: false
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.logged ? <MainContainer username={this.state.username} forecasts={this.state.forecasts} logout={this.logout} /> : <Login login={this.login} />}
      </div>
    );
  }
}

export default App;
