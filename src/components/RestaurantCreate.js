import React, { Component } from 'react'

export default class RestaurantCreate extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            address: "",
            rating: "",
            email: ""
        }
    }
    submitted() {
        fetch('http://localhost:3000/restaurant',
            {
                method: 'Post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            }).then((resp) => {
                resp.json().then((result) => {
                    console.log(result)
                })
            })
        alert("restaurant has been added")
    }
    render() {
        return (
            <div>
                <h1>Creating restaurent</h1>
                <input type="text" onChange={(e) => this.setState({ name: e.target.value })} placeholder="Restaurent Name" /><br /><br />
                <input type="Text" onChange={(e) => this.setState({ address: e.target.value })} placeholder="Restaurent address" /><br /><br />
                <input type="text" onChange={(e) => this.setState({ rating: e.target.value })} placeholder="Restaurent rating" /><br /><br />
                <input type="email" onChange={(e) => this.setState({ email: e.target.value })} placeholder="Restaurent email" /><br /><br />
                <button onClick={() => this.submitted()} className="btn btn-primary">Submit</button>
            </div>
        )
    }
}
