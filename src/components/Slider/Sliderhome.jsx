import React from 'react';
import "../../styles/Slider.css"
import { Carousel } from 'react-carousel-minimal';


import imageone from "../../assets/images/homesliderone.jpg"
import imagetwo from "../../assets/images/homeslidertwo.png"
import imagethree from "../../assets/images/homesliderthree.png"
import imagefour from "../../assets/images/homesliderfour.png"


function Sliderhome() {
  const data = [
    {
      image: imageone,
      // caption: "Komputerler"
    },
    {
      image: imagetwo,
      // caption: "Smartfonlar"
    },
    {
      image: imagethree,
      // caption: "Notbuklar"
    },
    {
      image: imagefour,
      // caption: "Notbuklar"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div id="homecompback">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px"
        }}>
          <center>
            <Carousel
              data={data}
              time={1500}
              width="1500px"
              height="300px"
              captionStyle={captionStyle}
              radius="10px"
              slideNumber={false}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={true}
              dots={false}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="#fff"
              slideImageFit="cover"
              thumbnails={true}
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "1100px",
                maxHeight: "500px",
                margin: "40px auto",
              }}
            />
          </center>
        </div>
      </div>

    </div>

  )
}


export default Sliderhome;