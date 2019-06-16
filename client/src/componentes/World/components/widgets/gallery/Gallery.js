import React, { Component } from 'react'

import './gallery.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


class Gallery extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <div >
        <Carousel className="gallery-dimension">
          <div>
            <img src="https://www.leak.pt/wp-content/uploads/2018/07/league-of-legends.jpg" />
          </div>
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
      </div>

    )
  }
}

export default Gallery