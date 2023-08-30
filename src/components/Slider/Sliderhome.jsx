import React from 'react';
import "./Slider.css"
import { Carousel } from 'react-carousel-minimal';


import imageone from "../../assets/images/shop1.webp"
import imagetwo from "../../assets/images/shop2.webp"
import imagethree from "../../assets/images/shop3.webp"


function Sliderhome() {
  const data = [
    {
      image:imageone,
      style:'width:200px !important',
      caption: "Komputerler"
    },
    {
      image: imagetwo,
      caption: "Smartfonlar"
    },
    {
      image: imagethree,
      caption: "Notbuklar"
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
    <div>
      <div style={{ textAlign: "center" }}>

        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="1500px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={false}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="#e4e7ed"
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
        </div>
      </div>

    </div>

  )
}


export default Sliderhome;