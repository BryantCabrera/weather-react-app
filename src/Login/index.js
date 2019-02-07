import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';

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
            <Form onSubmit={this.submit}>
                <Form.Input type="text" name="username" placeholder="username" onChange={this.handleInput}></Form.Input>
                <Form.Input type="password" name="password" placeholder="password" onChange={this.handleInput}></Form.Input>
                <Button animated='fade' color="yellow" type="submit">
                    <Button.Content visible>Log In</Button.Content>
                    <Button.Content hidden>Submit</Button.Content>
                </Button>
            </Form>
        )
    }
}

export default Login;