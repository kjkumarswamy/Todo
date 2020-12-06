import React from 'react';
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'


class RestaurantList extends React.Component {
    constructor() {
        super();
        this.state = {
            list: null
        }
    }

    componentDidMount() {
        this.getFetch()
    }
    getFetch() {
        fetch('http://localhost:3000/restaurant').then((response) => {
            response.json().then((data) => {
                this.setState({ list: data })
            })
        })
    }

    delete(id) {
        fetch('http://localhost:3000/restaurant/' + id, {
            method: 'DELETE'
        }).then((resp) => {
            alert("restaurant has been deleted")
            this.getFetch()
        })

    }
    render() {
        console.log(this.state.list)
        return (
            <div>
                <h1>This is restaurent list component</h1>
                <Table striped bordered hover className="mt-3">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Rating</th>
                            <th>Email</th>
                            <th>Operation</th>
                        </tr>
                    </thead><tbody>
                        {this.state.list ? this.state.list.map((item, i) =>
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.address}</td>
                                <td>{item.rating}</td>
                                <td>{item.email}</td>
                                <td><span><Link to={"/update/" + item.id}><FontAwesomeIcon color="blue" icon={faEdit} /> </Link></span>
                                    <span> <FontAwesomeIcon color="red" icon={faTrash} /></span>
                                </td>
                            </tr>
                        ) : <tr><td>Loading</td></tr>}
                    </tbody>
                </Table>
            </div >
        )
    }
}


export default RestaurantList