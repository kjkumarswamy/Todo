import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import { Navbar, Nav } from 'react-bootstrap'
import RestaurantCreate from './components/RestaurantCreate';
import RestaurantList from './components/RestaurantList';
import RestaurantSearch from './components/RestaurantSearch';
import RestaurantUpdate from './components/RestaurantUpdate';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faList, faPlus, faEdit } from '@fortawesome/free-solid-svg-icons'



class App extends React.Component {

    render() {
        return (
            <div className="container mt-2">
                <Router>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand ><Link to="/">Restaurant</Link></Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link><Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link></Nav.Link>
                            <Nav.Link><Link to="/list"><FontAwesomeIcon icon={faList} /> List</Link></Nav.Link>
                            <Nav.Link><Link to="/create"><FontAwesomeIcon icon={faPlus} /> Create</Link></Nav.Link>
                            <Nav.Link><Link to="/update"><FontAwesomeIcon icon={faEdit} /> Update</Link></Nav.Link>
                            <Nav.Link><Link to="/search"><FontAwesomeIcon icon={faEdit} /> Search</Link></Nav.Link>
                        </Nav>
                    </Navbar>


                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/list">
                        <RestaurantList />
                    </Route>
                    <Route path="/create">
                        <RestaurantCreate />
                    </Route>

                    <Route path="/update/:id" render={props => (
                        <RestaurantUpdate {...props} />
                    )}>
                    </Route>
                    <Route path="/search">
                        <RestaurantSearch />
                    </Route>

                </Router>

            </div>
        )
    }

}


export default App;