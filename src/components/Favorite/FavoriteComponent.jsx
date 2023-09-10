import React from 'react'
import styles from "../../styles/Favorite.module.css"
import hearticon from "../../assets/icons/heart-two.png";
import infoicon from "../../assets/icons/info.png";
import shopcarttwo from "../../assets/icons/shop-cart-two.png";
import imageone from "../../assets/images/shop1.webp"

function FavoriteComponent() {
    return (
        <section className={styles.favoriteSection}>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h2 className={`text-left mt-2`} >Seçilmişlər</h2>
                    </div>
                    <div className="col-md-4">
                        <center>
                            <input placeholder="axtarış..." type="text" className={`${styles.favoriteSearchInput} form-control`} />
                        </center>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className={styles.cardProduct}>
                            <center>
                                <img className={styles.cardImgTop} src={imageone} alt="Card image cap" />

                            </center>
                            <div className="card-body">
                                <h5 className="card-title text-center">CATEGORY</h5>
                                <p className="card-text text-center "><b>PRODUCT NAME</b></p>
                                <div className="row">
                                    <div className="col-md-12">
                                        <center>
                                            <span className={styles.cartfooterone}>$980.00</span>
                                            <span className="textunderline ml-2">$980.00</span>
                                        </center>
                                    </div>
                                    <div className="col-md-3">
                                        <hr className={styles.hrone} />
                                    </div>
                                    <div className="col-md-5">
                                        <center>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </center>
                                    </div>
                                    <div className="col-md-3">
                                        <hr className={styles.hrtwo} />
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
                    </div>

                    <div className="col-md-3">
                        <div className={styles.cardProduct}>
                            <center>
                                <img className={styles.cardImgTop} src={imageone} alt="Card image cap" />

                            </center>
                            <div className="card-body">
                                <h5 className="card-title text-center">CATEGORY</h5>
                                <p className="card-text text-center "><b>PRODUCT NAME</b></p>
                                <div className="row">
                                    <div className="col-md-12">
                                        <center>
                                            <span className={styles.cartfooterone}>$980.00</span>
                                            <span className="textunderline ml-2">$980.00</span>
                                        </center>
                                    </div>
                                    <div className="col-md-3">
                                        <hr className={styles.hrone} />
                                    </div>
                                    <div className="col-md-5">
                                        <center>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </center>
                                    </div>
                                    <div className="col-md-3">
                                        <hr className={styles.hrtwo} />
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
                    </div>
                    <div className="col-md-3">
                        <div className={styles.cardProduct}>
                            <center>
                                <img className={styles.cardImgTop} src={imageone} alt="Card image cap" />

                            </center>
                            <div className="card-body">
                                <h5 className="card-title text-center">CATEGORY</h5>
                                <p className="card-text text-center "><b>PRODUCT NAME</b></p>
                                <div className="row">
                                    <div className="col-md-12">
                                        <center>
                                            <span className={styles.cartfooterone}>$980.00</span>
                                            <span className="textunderline ml-2">$980.00</span>
                                        </center>
                                    </div>
                                    <div className="col-md-3">
                                        <hr className={styles.hrone} />
                                    </div>
                                    <div className="col-md-5">
                                        <center>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </center>
                                    </div>
                                    <div className="col-md-3">
                                        <hr className={styles.hrtwo} />
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
                    </div>
                    <div className="col-md-3">
                        <div className={styles.cardProduct}>
                            <center>
                                <img className={styles.cardImgTop} src={imageone} alt="Card image cap" />

                            </center>
                            <div className="card-body">
                                <h5 className="card-title text-center">CATEGORY</h5>
                                <p className="card-text text-center "><b>PRODUCT NAME</b></p>
                                <div className="row">
                                    <div className="col-md-12">
                                        <center>
                                            <span className={styles.cartfooterone}>$980.00</span>
                                            <span className="textunderline ml-2">$980.00</span>
                                        </center>
                                    </div>
                                    <div className="col-md-3">
                                        <hr className={styles.hrone} />
                                    </div>
                                    <div className="col-md-5">
                                        <center>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </center>
                                    </div>
                                    <div className="col-md-3">
                                        <hr className={styles.hrtwo} />
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
                    </div>
                    <div className="col-md-3">
                        <div className={styles.cardProduct}>
                            <center>
                                <img className={styles.cardImgTop} src={imageone} alt="Card image cap" />

                            </center>
                            <div className="card-body">
                                <h5 className="card-title text-center">CATEGORY</h5>
                                <p className="card-text text-center "><b>PRODUCT NAME</b></p>
                                <div className="row">
                                    <div className="col-md-12">
                                        <center>
                                            <span className={styles.cartfooterone}>$980.00</span>
                                            <span className="textunderline ml-2">$980.00</span>
                                        </center>
                                    </div>
                                    <div className="col-md-3">
                                        <hr className={styles.hrone} />
                                    </div>
                                    <div className="col-md-5">
                                        <center>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </center>
                                    </div>
                                    <div className="col-md-3">
                                        <hr className={styles.hrtwo} />
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
                    </div>
                    <div className="col-md-3">
                        <div className={styles.cardProduct}>
                            <center>
                                <img className={styles.cardImgTop} src={imageone} alt="Card image cap" />

                            </center>
                            <div className="card-body">
                                <h5 className="card-title text-center">CATEGORY</h5>
                                <p className="card-text text-center "><b>PRODUCT NAME</b></p>
                                <div className="row">
                                    <div className="col-md-12">
                                        <center>
                                            <span className={styles.cartfooterone}>$980.00</span>
                                            <span className="textunderline ml-2">$980.00</span>
                                        </center>
                                    </div>
                                    <div className="col-md-3">
                                        <hr className={styles.hrone} />
                                    </div>
                                    <div className="col-md-5">
                                        <center>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </center>
                                    </div>
                                    <div className="col-md-3">
                                        <hr className={styles.hrtwo} />
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
                    </div>
                    <div className="col-md-3">
                        <div className={styles.cardProduct}>
                            <center>
                                <img className={styles.cardImgTop} src={imageone} alt="Card image cap" />

                            </center>
                            <div className="card-body">
                                <h5 className="card-title text-center">CATEGORY</h5>
                                <p className="card-text text-center "><b>PRODUCT NAME</b></p>
                                <div className="row">
                                    <div className="col-md-12">
                                        <center>
                                            <span className={styles.cartfooterone}>$980.00</span>
                                            <span className="textunderline ml-2">$980.00</span>
                                        </center>
                                    </div>
                                    <div className="col-md-3">
                                        <hr className={styles.hrone} />
                                    </div>
                                    <div className="col-md-5">
                                        <center>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </center>
                                    </div>
                                    <div className="col-md-3">
                                        <hr className={styles.hrtwo} />
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
                    </div>
                    <div className="col-md-3">
                        <div className={styles.cardProduct}>
                            <center>
                                <img className={styles.cardImgTop} src={imageone} alt="Card image cap" />

                            </center>
                            <div className="card-body">
                                <h5 className="card-title text-center">CATEGORY</h5>
                                <p className="card-text text-center "><b>PRODUCT NAME</b></p>
                                <div className="row">
                                    <div className="col-md-12">
                                        <center>
                                            <span className={styles.cartfooterone}>$980.00</span>
                                            <span className="textunderline ml-2">$980.00</span>
                                        </center>
                                    </div>
                                    <div className="col-md-3">
                                        <hr className={styles.hrone} />
                                    </div>
                                    <div className="col-md-5">
                                        <center>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </center>
                                    </div>
                                    <div className="col-md-3">
                                        <hr className={styles.hrtwo} />
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
                    </div>



                </div>
            </div>
        </section>
    )
}

export default FavoriteComponent;