import React from 'react'
import './Newproducts.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import hearticon from "../../assets/icons/heart-two.png";
import infoicon from "../../assets/icons/info.png";
import shopcarttwo from "../../assets/icons/shop-cart-two.png";

import imageone from "../../assets/images/shop1.webp"
import imagetwo from "../../assets/images/shop2.webp"
import imagethree from "../../assets/images/shop3.webp"

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
};

const items = [

        <div className="col-md-3">
            <div className="card">
                <img className="card-img-top" src={imageone} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Category</h5>
                    <p className="card-text"><b>Product Name</b></p>
                    <p>$980.00</p>
                </div>
                <hr />

                <div className="card-footer">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={hearticon} alt="" />
                        </div>
                        <div className="col-md-4">
                            <img src={infoicon} alt="" />
                        </div>
                        <div className="col-md-4">
                            <img src={shopcarttwo} alt="" />
                        </div>
                    </div>

                </div>
            </div>

        </div>    ,
        <div className="col-md-3">
            <div className="card">
                <img className="card-img-top" src={imageone} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Category</h5>
                    <p className="card-text"><b>Product Name</b></p>
                    <p>$980.00</p>
                </div>
                <hr />

                <div className="card-footer">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={hearticon} alt="" />
                        </div>
                        <div className="col-md-4">
                            <img src={infoicon} alt="" />
                        </div>
                        <div className="col-md-4">
                            <img src={shopcarttwo} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>,
        <div className="col-md-3">
            <div className="card">
                <img className="card-img-top" src={imageone} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Category</h5>
                    <p className="card-text"><b>Product Name</b></p>
                    <p>$980.00</p>
                </div>
                <hr />

                <div className="card-footer">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={hearticon} alt="" />
                        </div>
                        <div className="col-md-4">
                            <img src={infoicon} alt="" />
                        </div>
                        <div className="col-md-4">
                            <img src={shopcarttwo} alt="" />
                        </div>
                    </div>

                </div>
            </div>

        </div>,
         <div className="col-md-3">
         <div className="card">
             <img className="card-img-top" src={imageone} alt="Card image cap" />
             <div className="card-body">
                 <h5 className="card-title">Category</h5>
                 <p className="card-text"><b>Product Name</b></p>
                 <p>$980.00</p>
             </div>
             <hr />

             <div className="card-footer">
                 <div className="row">
                     <div className="col-md-4">
                         <img src={hearticon} alt="" />
                     </div>
                     <div className="col-md-4">
                         <img src={infoicon} alt="" />
                     </div>
                     <div className="col-md-4">
                         <img src={shopcarttwo} alt="" />
                     </div>
                 </div>

             </div>
         </div>

     </div>,
         <div className="col-md-3">
         <div className="card">
             <img className="card-img-top" src={imageone} alt="Card image cap" />
             <div className="card-body">
                 <h5 className="card-title">Category</h5>
                 <p className="card-text"><b>Product Name</b></p>
                 <p>$980.00</p>
             </div>
             <hr />

             <div className="card-footer">
                 <div className="row">
                     <div className="col-md-4">
                         <img src={hearticon} alt="" />
                     </div>
                     <div className="col-md-4">
                         <img src={infoicon} alt="" />
                     </div>
                     <div className="col-md-4">
                         <img src={shopcarttwo} alt="" />
                     </div>
                 </div>

             </div>
         </div>

     </div>,
        <div className="col-md-3">
            <div className="card">
                <img className="card-img-top" src={imageone} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Category</h5>
                    <p className="card-text"><b>Product Name</b></p>
                    <p>$980.00</p>
                </div>
                <hr />

                <div className="card-footer">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={hearticon} alt="" />
                        </div>
                        <div className="col-md-4">
                            <img src={infoicon} alt="" />
                        </div>
                        <div className="col-md-4">
                            <img src={shopcarttwo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>,
    

]

function Newproducts() {
    return (
        <div className="container">
            <h2 className="newprdtitle">Yeni Məhsullar</h2>
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
            />

        </div>
    )
}

export default Newproducts;
