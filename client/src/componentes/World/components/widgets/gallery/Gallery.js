import React, { Component } from 'react'

import './gallery.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import { uploadImage } from '../../../../WorldFunctions'
import ImageUploader from 'react-images-upload';

const image2base64 = require('image-to-base64');
var base64ToImage = require('base64-to-image');
let validBase64 = new RegExp("^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{0,2}==)$","gim");

class Gallery extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedFile : null,
       base64:null
    }
  }

  fileSelectedHandler = event=>{
    this.setState({
      selectedFile:URL.createObjectURL(event.target.files[0])
    })

    let type = event.target.files[0].type;

    image2base64(URL.createObjectURL(event.target.files[0]))
    .then(
        (response) => {
          console.log("TESTE")
            this.state.base64 = "data:"+type+";base64,"+ response;
            //var imageInfo = base64ToImage( this.state.base64,"../../../../static",null); 
            //console.log("IMAGEM INFO = " + imageInfo)
        }
    )
    .catch(
        (error) => {
            console.log(error); //Exepection error....
        }
    )

  }
  fileUploadHandler = () => {
    
    uploadImage(this.state.base64).then(res => {
      console.log("UPLOAD")
  })
  }
  componentDidMount() {

  }

  render() {
    return (
      <div >
   
        <input type="file" id="file" onChange={this.fileSelectedHandler}></input>
        <button onClick={this.fileUploadHandler}>Upload</button>
       
        <Carousel className="gallery-dimension">
          <div>
            <img src={this.state.selectedFile} />
          </div>
        </Carousel>
         {/**
          <div>
            <img src="https://www.maistecnologia.com/wp-content/uploads/2014/11/leagueoflegendsbig_5f2028ee86d150ad8c456113ec9c54e3.jpg" />
          </div>
          <div>
            <img src="http://s2.glbimg.com/pEc1hJsTyxNO7eutsl1FVTwxoQU=/695x0/s.glbimg.com/po/tt2/f/original/2015/09/17/lol.jpg" />
          </div>
          <div>
            <img src="https://cdn.centraldeaprendizado.br.leagueoflegends.com/media/videos/thumbnails/cda_thumbs_LoL.jpg" />
          </div>
          <div>
            <img src="https://www.bonde.com.br/img/bondenews/2018/08/img_1_2_49.jpg" />
          </div>

        </Carousel>
        **/}
      </div>
  
    )
  }
}

export default Gallery