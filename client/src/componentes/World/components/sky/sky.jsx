import React, { Component } from 'react'
import {skyType} from '../../worldconstructor'
import './sky.css'
const textures = [
    "url('../../../static/sky.png')"
]
class sky extends Component {
    componentDidMount(){
        var sky = document.getElementsByClassName('sky')
       // sky.style.backgroundImage = textures[skyType().description]
        console.log(skyType())
    }

    render() {
        return (
            <div ref='sky' className='sky'></div>
        )
    }
}

export default sky