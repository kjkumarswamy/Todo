import React, { Component } from 'react'
export default class RestaurantUpdate extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            address: "",
            rating: "",
            email: ""
        }
    }


    componentDidMount() {
        fetch('http://localhost:3000/restaurant/' + this.props.match.params.id).then((resp) => {
            resp.json().then((result) => {
                this.setState({
                    name: result.name,
                    email: result.email,
                    rating: result.rating,
                    address: result.address
                })
            })
        })
    }
    updated() {
        fetch('http://localhost:3000/restaurant/' + this.props.match.params.id, {
            method: 'Put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((resp) => {
            resp.json().then((results) => {
                console.log(results)
            })
        })
    }
    render() {
        return (
            <div>
                <h1>This is update component</h1>
                <input type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} placeholder="Restaurant Name" /><br /><br />
                <input type="text" value={this.state.address} onChange={(e) => this.setState({ address: e.target.value })} placeholder="Restaurant address" /><br /><br />
                <input type="text" value={this.state.rating} onChange={(e) => this.setState({ rating: e.target.value })} placeholder="Restaurant Rating" /><br /><br />
                <input type="text" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} placeholder="Restaurant email" /><br /><br />
                <button onClick={() => this.updated()}>Update</button>
            </div>
        )
    }
}
