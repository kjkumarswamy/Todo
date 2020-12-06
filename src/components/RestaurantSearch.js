import React from 'react';
import { Table, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
class RestaurantSearch extends React.Component {
    constructor() {
        super();
        this.state = {
            searchData: "",
            nodata: false,
            lastSearchKey: null
        }
    }
    search(key) {
        this.setState({ lastSearchKey: key })
        fetch('http://localhost:3000/restaurant/?q=' + key,).then((resp) => {
            resp.json().then((result) => {
                if (result.length > 0) {
                    this.setState({ searchData: result, nodata: false })
                } else {
                    this.setState({ searchData: null, nodata: true })
                }
            })
        })
    }
    delete(item) {
        fetch('http://localhost:3000/restaurant/' + item, {
            method: 'DELETE'
        }).then((deleted) => {
            alert('item deleted')
            this.search(this.state.lastSearchKey)
        })
    }





    render() {
        return (
            <div>
                <h1>This is Search component</h1>
                <Form.Control type="text" onChange={(e) => this.search(e.target.value)} placeholder="search" />
                <Table striped bordered hover className="mt-3">
                    <thead>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>RATING</th>
                        <th>ADDRESS</th>
                        <th>OPERATION</th>
                    </thead>
                    <tbody>
                        {
                            this.state.searchData ? this.state.searchData.map((items) =>
                                <tr>
                                    <td>{items.id}</td>
                                    <td>{items.name}</td>
                                    <td>{items.rating}</td>
                                    <td>{items.address}</td>
                                    <td><span onClick={() => this.delete(items.id)}><FontAwesomeIcon color="red" icon={faTrash} /> </span>
                                        <span> <Link to={"/update/" + items.id}> <FontAwesomeIcon color="blue" icon={faEdit} /></Link></span>
                                    </td>
                                </tr>
                            ) : null
                        }</tbody></Table>
                {
                    this.state.nodata ? <h1>No data found</h1> : null
                }
            </div>
        )
    }
}

export default RestaurantSearch