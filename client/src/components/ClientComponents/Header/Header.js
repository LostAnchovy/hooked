import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'mdbreact';


const header = (props) => {
    console.log('props from header',props)
    return (
        <Navbar dark color="stylish-color-dark" expand="lg" sticky="top" className="mb-5">
            <button className="navbar-toggler mx-auto" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="basicExampleNav">
                <div className="navbar-nav nav-item mr-auto" data-target=".navbar-collapse.show" data-toggle="collapse">
                    <Link to="/" className="nav-link">Home</Link>
                    {props.isAdmin ?
                        // <Link to="/admin" className="nav-link">Admin</Link> : null
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Admin
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <Link to="/admin" className="dropdown-item">Dashboard </Link>
                          <Link to="/admin/users"  className="dropdown-item">Registered Users</Link>
                          <div className="dropdown-divider"></div>
                          <Link to="/admin/orders"  className="dropdown-item">Orders</Link>
                        </div>
                      </li>:null
                    }
                </div>
                {props.loggedIn ?
                    <div className="navbar-nav nav-item" data-target=".navbar-collapse.show" data-toggle="collapse">
                        <Link className="nav-link" to={`/user/${props.userId}`} >Welcome {props.firstName}</Link>
                        <Link className="nav-link" to="/logout"> Logout</Link>
                    </div> :
                    <div className="navbar-nav nav-item" data-target=".navbar-collapse.show" data-toggle="collapse">
                        <Link className="nav-link" to="/login"> Login</Link>
                        <Link className="nav-link" to="/register"> Register</Link>
                    </div>
                }
            </div>
        </Navbar>
    );
}

export default header;
