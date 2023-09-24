import React from 'react'
import Carousel from 'react-grid-carousel'
import "../../styles/Topselling.css";

import hearticon from "../../assets/icons/heart-two.png";
import infoicon from "../../assets/icons/info.png";
import shopcarttwo from "../../assets/icons/shop-cart-two.png";

import imageone from "../../assets/images/shop1.webp"
// import imagetwo from "../../assets/images/shop2.webp"
// import imagethree from "../../assets/images/shop3.webp"


function Topselling() {
    return (
        <div className='content container topsellingsection'>

            <h3 className="text-left mt-5 mb-5">ƏN ÇOX SATILANLAR</h3>
            <Carousel cols={4} rows={1} gap={10} autoplay={2000} loop>
                <Carousel.Item>
                    <div className="card">
                        <center>
                            <img className="card-img-top" src={imageone} alt="Card image cap" />
                        </center>
                        <div className="card-body">
                            <h5 className="card-title text-center">CATEGORY</h5>
                            <p className="card-text text-center"><b>PRODUCT NAME</b></p>
                            <div className="row">
                                <div className="col-md-12">
                                    <center>
                                        <span className="cartfooterone">$980.00</span>
                                        <span className="textunderline ml-2">$980.00</span>
                                    </center>
                                </div>
                                <div className="col-md-3">
                                    <hr />
                                </div>
                                <div className="col-md-6">
                                    <center>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </center>
                                </div>
                                <div className="col-md-3">
                                    <hr className="hrtwo" />
                                </div>
                            </div>

                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col-md-4">
                                    <center>
                                        <img src={hearticon} alt="" />
                                    </center>
                                </div>
                                <div className="col-md-4">
                                    <center>
                                        <img src={infoicon} alt="" />
                                    </center>
                                </div>
                                <div className="col-md-4">
                                    <center>
                                        <img src={shopcarttwo} alt="" />
                                    </center>
                                </div>
                            </div>

                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="card">
                        <center>
                            <img className="card-img-top" src={imageone} alt="Card image cap" />
                        </center>
                        <div className="card-body">
                            <h5 className="card-title text-center">CATEGORY</h5>
                            <p className="card-text text-center"><b>PRODUCT NAME</b></p>
                            <div className="row">
                                <div className="col-md-12">
                                    <center>
                                        <span className="cartfooterone">$980.00</span>
                                        <span className="textunderline ml-2">$980.00</span>
                                    </center>
                                </div>
                                <div className="col-md-3">
                                    <hr />
                                </div>
                                <div className="col-md-6">
                                    <center>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </center>
                                </div>
                                <div className="col-md-3">
                                    <hr className="hrtwo" />
                                </div>
                            </div>

                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col-md-4">
                                    <center>
                                        <img src={hearticon} alt="" />
                                    </center>
                                </div>
                                <div className="col-md-4">
                                    <center>
                                        <img src={infoicon} alt="" />
                                    </center>
                                </div>
                                <div className="col-md-4">
                                    <center>
                                        <img src={shopcarttwo} alt="" />
                                    </center>
                                </div>
                            </div>

                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="card">
                        <center>
                            <img className="card-img-top" src={imageone} alt="Card image cap" />
                        </center>
                        <div className="card-body">
                            <h5 className="card-title text-center">CATEGORY</h5>
                            <p className="card-text text-center"><b>PRODUCT NAME</b></p>
                            <div className="row">
                                <div className="col-md-12">
                                    <center>
                                        <span className="cartfooterone">$980.00</span>
                                        <span className="textunderline ml-2">$980.00</span>
                                    </center>
                                </div>
                                <div className="col-md-3">
                                    <hr />
                                </div>
                                <div className="col-md-6">
                                    <center>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </center>
                                </div>
                                <div className="col-md-3">
                                    <hr className="hrtwo" />
                                </div>
                            </div>

                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col-md-4">
                                    <center>
                                        <img src={hearticon} alt="" />
                                    </center>
                                </div>
                                <div className="col-md-4">
                                    <center>
                                        <img src={infoicon} alt="" />
                                    </center>
                                </div>
                                <div className="col-md-4">
                                    <center>
                                        <img src={shopcarttwo} alt="" />
                                    </center>
                                </div>
                            </div>

                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="card">
                        <center>
                            <img className="card-img-top" src={imageone} alt="Card image cap" />
                        </center>
                        <div className="card-body">
                            <h5 className="card-title text-center">CATEGORY</h5>
                            <p className="card-text text-center"><b>PRODUCT NAME</b></p>
                            <div className="row">
                                <div className="col-md-12">
                                    <center>
                                        <span className="cartfooterone">$980.00</span>
                                        <span className="textunderline ml-2">$980.00</span>
                                    </center>
                                </div>
                                <div className="col-md-3">
                                    <hr />
                                </div>
                                <div className="col-md-6">
                                    <center>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </center>
                                </div>
                                <div className="col-md-3">
                                    <hr className="hrtwo" />
                                </div>
                            </div>

                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col-md-4">
                                    <center>
                                        <img src={hearticon} alt="" />
                                    </center>
                                </div>
                                <div className="col-md-4">
                                    <center>
                                        <img src={infoicon} alt="" />
                                    </center>
                                </div>
                                <div className="col-md-4">
                                    <center>
                                        <img src={shopcarttwo} alt="" />
                                    </center>
                                </div>
                            </div>

                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="card">
                        <center>
                            <img className="card-img-top" src={imageone} alt="Card image cap" />
                        </center>
                        <div className="card-body">
                            <h5 className="card-title text-center">CATEGORY</h5>
                            <p className="card-text text-center"><b>PRODUCT NAME</b></p>
                            <div className="row">
                                <div className="col-md-12">
                                    <center>
                                        <span className="cartfooterone">$980.00</span>
                                        <span className="textunderline ml-2">$980.00</span>
                                    </center>
                                </div>
                                <div className="col-md-3">
                                    <hr />
                                </div>
                                <div className="col-md-6">
                                    <center>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </center>
                                </div>
                                <div className="col-md-3">
                                    <hr className="hrtwo" />
                                </div>
                            </div>

                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col-md-4">
                                    <center>
                                        <img src={hearticon} alt="" />
                                    </center>
                                </div>
                                <div className="col-md-4">
                                    <center>
                                        <img src={infoicon} alt="" />
                                    </center>
                                </div>
                                <div className="col-md-4">
                                    <center>
                                        <img src={shopcarttwo} alt="" />
                                    </center>
                                </div>
                            </div>

                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="card">
                        <center>
                            <img className="card-img-top" src={imageone} alt="Card image cap" />
                        </center>
                        <div className="card-body">
                            <h5 className="card-title text-center">CATEGORY</h5>
                            <p className="card-text text-center"><b>PRODUCT NAME</b></p>
                            <div className="row">
                                <div className="col-md-12">
                                    <center>
                                        <span className="cartfooterone">$980.00</span>
                                        <span className="textunderline ml-2">$980.00</span>
                                    </center>
                                </div>
                                <div className="col-md-3">
                                    <hr />
                                </div>
                                <div className="col-md-6">
                                    <center>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </center>
                                </div>
                                <div className="col-md-3">
                                    <hr className="hrtwo" />
                                </div>
                            </div>

                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col-md-4">
                                    <center>
                                        <img src={hearticon} alt="" />
                                    </center>
                                </div>
                                <div className="col-md-4">
                                    <center>
                                        <img src={infoicon} alt="" />
                                    </center>
                                </div>
                                <div className="col-md-4">
                                    <center>
                                        <img src={shopcarttwo} alt="" />
                                    </center>
                                </div>
                            </div>

                        </div>
                    </div>
                </Carousel.Item>


            </Carousel>
        </div>
    )
}


export default Topselling;