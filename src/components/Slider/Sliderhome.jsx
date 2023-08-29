import React from 'react';
import "./Slider.css"
import Carousel from 'nuka-carousel';



import imageone from "../../assets/images/shop1.webp"
import imagetwo from "../../assets/images/shop2.webp"
import imagethree from "../../assets/images/shop3.webp"


function Sliderhome() {

  return (
    <div className="container slider-carousel">
      <Carousel>
        <center>
          <div className="trapesium">
            <img className='imageslider' src={imageone} />
          </div>
        </center>
        <center>
          <div className="trapesium" >
            <img className="imageslider" src={imagetwo} />
          </div>
        </center>
        <center>
          <div className="trapesium">
            <img className="imageslider" src={imagethree} />
          </div>
        </center>
      </Carousel>
    </div>

  )
}


export default Sliderhome;