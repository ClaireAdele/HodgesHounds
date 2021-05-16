import React, { Component } from 'react';
import { auth, setPersistence } from '../../Util-Functions/config';
import { signIn } from '../../Util-Functions/firestore-functions'

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
        return (
            this.state.mark ?
            <div>
                <button onClick={this.handleLogout}>Sign-Out</button>
            </div>
            :
            <div>
                <form>
                <input type="text" placeholder="email" onChange={this.handleChangeEmail}/>
                <input type="text" placeholder="password" onChange={this.handleChangePassword}/>
                <button onClick={this.handleSubmit}>Sign-In</button>
                </form>
            </div>
        )
    }
}

