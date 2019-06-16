import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

import './loginAndRegister.css'
import Register from './Register'
import Login from './Login'
import logo from './static/logo.png'

class menu extends Component {
    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }

    render() {
        return (
            <>
                <Navbar fixed="top" className="justify-content-between" bg="dark" variant="dark">
                    <Navbar.Brand><Link className='textGoldColor' to='/'><img className='logo'  src={logo}/></Link></Navbar.Brand>
                    <Navbar.Brand >
                        <Register />
                        <Login />
                        <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                            Logout
                        </a>
                    </Navbar.Brand>
                </Navbar>
                <br />
            </>
        )
    }
}

export default menu