import React, { Component } from 'react';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registerName: '',
            registerEmail: '',
            registerPassword: ''
        }
    }

    onNameChange = (e) => {
        this.setState({ registerName: e.target.value });
    }

    onEmailChange = (e) => {
        this.setState({ registerEmail: e.target.value });
    }

    onPasswordChange = (e) => {
        this.setState({ registerPassword: e.target.value });
    }

    onSubmit = () => {
        fetch('https://cryptic-island-09793.herokuapp.com/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: this.state.registerName,
                email: this.state.registerEmail,
                password: this.state.registerPassword
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }
            });
    }

    render() {
        const enterKey = (e) => {
            if (e.key === "Enter"){
                this.onSubmit();
            }
        }
        return (
            <div>
                <div className="pa5"></div>
                <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                    <main className="pa4 white-80">
                        <div className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f2 fw6 ph0 mh0">Register</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                    <input
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="text"
                                        name="name"
                                        id="name"
                                        onChange={this.onNameChange} />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                    <input
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="email"
                                        name="email-address"
                                        id="email-address"
                                        onChange={this.onEmailChange} />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                    <input
                                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="password"
                                        name="password"
                                        id="password"
                                        onKeyPress={(e) => enterKey(e)}
                                        onChange={this.onPasswordChange} />
                                </div>
                            </fieldset>
                            <div className="">
                                <input
                                    className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f7 dib white"
                                    type="submit"
                                    value="Register"
                                    onClick={this.onSubmit} />
                            </div>
                        </div>
                    </main>
                </article>
            </div>
        );
    }
}

export default Register;