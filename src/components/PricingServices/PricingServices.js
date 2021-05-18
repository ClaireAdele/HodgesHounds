import React, { Component } from 'react';
import DeleteService from './DeleteService';
import { firestore, auth } from "../../Util-Functions/config"; 
import ImgSrc from "../../Images/loader-paws.gif";
import "./PricingServices.css"

export default class PricingServices extends Component {
    state = {
        service : "",
        price: "",
        displayedServices : [],
        mark : false
    }

    componentDidMount() {
        const dbRef = firestore.collection("services").doc("services-pricing");
        dbRef.get().then((res) => {
            const data = res.data();
            return data;
        }).then((data) => {
            this.setState({displayedServices : data.services});
            if(auth.currentUser) {
                this.setState({mark : true})
            }
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.displayedServices !== this.state.displayedServices) {
            const dbRef = firestore.collection("services").doc("services-pricing");
            dbRef.update({services: this.state.displayedServices});
        }
    }

    handleInputChangeService = (event) => {
        const {value} = event.target;
        this.setState({service : value});
        console.log(this.state)
    }

    handleInputChangePrice = (event) => {
        const {value} = event.target;
        this.setState({price: value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState((currentState) => { return { displayedServices : [...currentState.displayedServices, { service : this.state.service, price: this.state.price}]}})
    }

    render() {
        return (
            this.state.mark ?
            <div id="pricingServices-container">
            <div class="services-list">
            <h1>Our Services</h1>
            {this.state.displayedServices.map((service) => {
                return <div><text>{service.service}</text> <text>£{service.price}</text> <DeleteService props={{service, arrayServices : this.state.displayedServices}}></DeleteService></div> 
            })}
            <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="type in new service" onChange={this.handleInputChangeService} name="service"></input>
            <input type="integer" placeholder="set price" onChange={this.handleInputChangePrice} name="price"></input>
            <button>Add Service</button>
            </form>
            </div>
            <div id="textServices">
                <div class="textExplanation">
                <h3>Dog Grooming Services</h3>
                <text>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </text>
                </div>
                <div class="textExplanation">
                <h3>Dog Walking Services</h3>
                <text>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </text>
                </div>
            </div>
            </div>
            :
            <div id="pricingServices-container">
            <div class="services-list">
            <h1>Our Services</h1>
            {this.state.displayedServices.map((service) => {
                return <div><text>{service.service}</text> <text>£{service.price}</text></div>
            })}
            </div>
            <div id="textServices">
                <div class="textExplanation">
                <h3>Dog Grooming Services</h3>
                <text>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </text>
                </div>
                <div class="textExplanation">
                <h3>Dog Walking Services</h3>
                <text>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </text>
                </div>
            </div>            
        </div>
        )
    }  
}
