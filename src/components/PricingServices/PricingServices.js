import React, { Component } from 'react';
import { firestore } from "../../Util-Functions/config"; 

export default class PricingServices extends Component {
    state = {
        service : "",
        price: "",
        displayedServices : []
    }

    componentDidMount() {
        const dbRef = firestore.collection("services").doc("services-pricing");
        dbRef.get().then((res) => {
            const data = res.data();
            return data;
        }).then((data) => {
            this.setState({displayedServices : data.services});
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.displayedServices !== this.state.displayedServices) {
            const dbRef = firestore.collection("services").doc("services-pricing");
            dbRef.update({services: this.state.displayedServices});
            console.log(this.state.displayedServices)
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
        console.log(this.state.displayedServices)
        return (
            this.state.displayedServices.length > 0 ?
            <div>
            <text>Our Services</text>
            {this.state.displayedServices.map((service) => {
                return <div><text>{service.service}</text> <text>{service.price}</text></div>
            })}
            <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="type in new service" onChange={this.handleInputChangeService} name="service"></input>
            <input type="number" placeholder="set price" onChange={this.handleInputChangePrice} name="price"></input>
            <button>Add Service</button>
            </form>
            </div>
            :
            <div>
            <text>Our Services</text>
            <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="type in new service" onChange={this.handleInputChangeService} name="service"></input>
            <input type="number" placeholder="set price" onChange={this.handleInputChangePrice} name="price"></input>
            <button>Add Service</button>
            </form>
        </div>
        )
    }  
}
