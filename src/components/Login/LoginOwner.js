import React, { Component } from 'react';
import { auth, setPersistence } from '../../Util-Functions/config';
import { signIn } from '../../Util-Functions/firestore-functions';
import "./Login.css";

export default class LoginOwner extends Component {
    state = {
        email: "",
        password: "",
        errorStatement : "",
    }

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if(user) {
               this.setState({mark : true})
            }
        })
    }

    handleChangeEmail = (event) => {
        const {value} = event.target;
        this.setState({email: value})
    }

    handleChangePassword = (event) => {
        const {value} = event.target;
        this.setState({password: value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        setPersistence.then(() => {return signIn(this.state.email, this.state.password)})
        .then((err) => { 
          if(err) {
          this.setState({errorStatement : err});
        }});
    }

    handleLogout = (event) => {
        event.preventDefault();
        auth.signOut().then(() => (this.setState({mark : false})))
    }

    render() {
        console.log(this.state.errorStatement)
        return (
            auth.currentUser ?
            <div class="login-container">
                <button id="SignOutButton" onClick={this.handleLogout}>Sign-Out</button>
            </div>
            :
            this.state.errorStatement ?
            <div class="login-container">
                <form id="inputFormLogin">
                <input id="inputUserLogin" type="text" placeholder="email" onChange={this.handleChangeEmail}/>
                <input id="inputUserLogin" type="password" placeholder="password" onChange={this.handleChangePassword}/>
                <button id="SignInButton" onClick={this.handleSubmit}>Sign-In</button>
                <p id="errorStatement" >{this.state.errorStatement}</p>
                </form>
            </div>
            :
            <div class="login-container">
                <form id="inputFormLogin">
                <input id="inputUserLogin" type="text" placeholder="email" onChange={this.handleChangeEmail}/>
                <input id="inputUserLogin" type="password" placeholder="password" onChange={this.handleChangePassword}/>
                <button id="SignInButton" onClick={this.handleSubmit}>Sign-In</button>
                </form>
            </div>
        )
    }
}

