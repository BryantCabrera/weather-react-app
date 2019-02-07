import React, { Component } from 'react';

class Login extends Component {
    constructor () {
        super();

        this.state = {
            username: '',
            password: ''
        }
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    submit = (e) => {
        e.preventDefault();

        this.props.login(this.state.username);
    }

    render () {
        console.log(this.state);
        return (
            <form onSubmit={this.submit}>
                <input type="text" name="username" placeholder="username" onChange={this.handleInput}></input>
                <input type="password" name="password" placeholder="password" onChange={this.handleInput}></input>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Login;