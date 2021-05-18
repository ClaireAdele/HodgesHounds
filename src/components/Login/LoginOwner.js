import React, { Component } from 'react';
import { auth, setPersistence } from '../../Util-Functions/config';
import { signIn } from '../../Util-Functions/firestore-functions';
import "./Login.css";

export default class LoginOwner extends Component {
    state = {
        email: "",
        password: "",
        mark : false,
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
        signIn(this.state.email, this.state.password).then(() => (this.setState({mark : true})))
        setPersistence.then(() => {return auth.signInWithEmailAndPassword(this.state.email, this.state.password)});
    }
    

    handleLogout = (event) => {
        event.preventDefault();
        auth.signOut().then(() => (this.setState({mark : false})))
    }

    render() {
        console.log(this.state.mark)
        return (
            this.state.mark ?
            <div id="login-container">
                <button onClick={this.handleLogout}>Sign-Out</button>
            </div>
            :
            <div id="login-container">
                <form>
                <input type="text" placeholder="email" onChange={this.handleChangeEmail}/>
                <input type="text" placeholder="password" onChange={this.handleChangePassword}/>
                <button onClick={this.handleSubmit}>Sign-In</button>
                </form>
            </div>
        )
    }
}

