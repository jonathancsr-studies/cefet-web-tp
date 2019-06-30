import React, { Component } from 'react'

import './cardProfile.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
const jwt = require("jsonwebtoken")
const userId = window.location.href.split('World')[1]
const userLogado = localStorage.usertoken == null ? -1 : jwt.decode(localStorage.usertoken).id;
const editavel = userId == userLogado ? true : false;

class CardProfile extends Component {



  componentDidMount() {


  }

  render() {

    return (
      <div></div>
    )
  }
}

export default CardProfile;