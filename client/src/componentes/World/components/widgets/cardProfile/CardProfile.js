import React, { Component } from 'react'
import './cardProfile.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from 'axios';
const jwt = require("jsonwebtoken")
const userId = window.location.href.split('World')[1]
const userLogado = jwt.decode(localStorage.usertoken).id;
const editavel = userId == userLogado ? true : false;
import { AppContainer } from 'react-hot-loader';

class cardProfile extends Component {



    componentDidMount() {


    }

    render() {

        return ()
    }
}

export default CardProfile