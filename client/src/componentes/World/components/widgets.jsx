import React, {Component} from 'react'

import './widgets.css'

import Gallery from './widgets/gallery/Gallery'
import BoxText from './widgets/boxText/boxText'
let widgetsList;

class widgets extends Component
{
    componentDidMount(){

    }

    render(){
        return(
            <div className='containerWidgets' ref='containerWidgets'>
                <ul className="ul-widgets">
                    <li>
                        <Gallery></Gallery>
                    </li>
                    <li>
                        <BoxText></BoxText>
                    </li>
                    
                </ul>
            </div>
        )
    }
}

export default widgets