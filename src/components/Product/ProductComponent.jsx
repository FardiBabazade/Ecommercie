import React from 'react';
import styles from "./ProductComponent.module.css";
import backproductimg from "../../assets/images/backproduct.png";
import hearticon from "../../assets/icons/heart-two.png";
import infoicon from "../../assets/icons/info.png";
import shopcarttwo from "../../assets/icons/shop-cart-two.png";
import imageone from "../../assets/images/shop1.webp"
import imagetwo from "../../assets/images/shop2.webp"
import imagethree from "../../assets/images/shop3.webp"




function ProductComponent() {
   return (
      <section className="productpage">
       
         <div className={styles.imgdiv}>
         <h3 className={styles.productimgtitle}>Məhsullar</h3>
            <img className={styles.backimgproduct} src={backproductimg} />
         </div>
         <div className="container-fluid">
            <div className="row">
               <div className="col-md-4">

               </div>
               <div className="col-md-8">
                  <div className="row">
                        
                 <input type="text" className="form-control"  />


                     <div className={styles.cardProduct}>
                        <img className="card-img-top" src={imageone} alt="Card image cap" />
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
                                 <hr />
                              </div>
                              <div className="col-md-6">
                                 <i className="fa fa-star"></i>
                                 <i className="fa fa-star"></i>
                                 <i className="fa fa-star"></i>
                                 <i className="fa fa-star"></i>
                              </div>
                              <div className="col-md-3">
                                 <hr className={styles.hrtwo} />
                              </div>
                           </div>

                        </div>
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

                     <div className={styles.cardProduct}>
                        <img className="card-img-top" src={imageone} alt="Card image cap" />
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
                                 <hr />
                              </div>
                              <div className="col-md-6">
                                 <i className="fa fa-star"></i>
                                 <i className="fa fa-star"></i>
                                 <i className="fa fa-star"></i>
                                 <i className="fa fa-star"></i>
                              </div>
                              <div className="col-md-3">
                                 <hr className={styles.hrtwo} />
                              </div>
                           </div>

                        </div>
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

                     <div className={styles.cardProduct}>
                        <img className="card-img-top" src={imageone} alt="Card image cap" />
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
                                 <hr />
                              </div>
                              <div className="col-md-6">
                                 <i className="fa fa-star"></i>
                                 <i className="fa fa-star"></i>
                                 <i className="fa fa-star"></i>
                                 <i className="fa fa-star"></i>
                              </div>
                              <div className="col-md-3">
                                 <hr className={styles.hrtwo} />
                              </div>
                           </div>

                        </div>
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

                     <div className={styles.cardProduct}>
                        <img className="card-img-top" src={imageone} alt="Card image cap" />
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
                                 <hr />
                              </div>
                              <div className="col-md-6">
                                 <i className="fa fa-star"></i>
                                 <i className="fa fa-star"></i>
                                 <i className="fa fa-star"></i>
                                 <i className="fa fa-star"></i>
                              </div>
                              <div className="col-md-3">
                                 <hr className={styles.hrtwo} />
                              </div>
                           </div>

                        </div>
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

                 
                     <div className={styles.cardProduct}>
                        <img className="card-img-top" src={imageone} alt="Card image cap" />
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
                                 <hr />
                              </div>
                              <div className="col-md-6">
                                 <i className="fa fa-star"></i>
                                 <i className="fa fa-star"></i>
                                 <i className="fa fa-star"></i>
                                 <i className="fa fa-star"></i>
                              </div>
                              <div className="col-md-3">
                                 <hr className={styles.hrtwo} />
                              </div>
                           </div>

                        </div>
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

                     <div className={styles.cardProduct}>
                        <img className="card-img-top" src={imageone} alt="Card image cap" />
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
                                 <hr />
                              </div>
                              <div className="col-md-6">
                                 <i className="fa fa-star"></i>
                                 <i className="fa fa-star"></i>
                                 <i className="fa fa-star"></i>
                                 <i className="fa fa-star"></i>
                              </div>
                              <div className="col-md-3">
                                 <hr className={styles.hrtwo} />
                              </div>
                           </div>

                        </div>
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

                     <div className={styles.cardProduct}>
                        <img className="card-img-top" src={imageone} alt="Card image cap" />
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
                                 <hr />
                              </div>
                              <div className="col-md-6">
                                 <i className="fa fa-star"></i>
                                 <i className="fa fa-star"></i>
                                 <i className="fa fa-star"></i>
                                 <i className="fa fa-star"></i>
                              </div>
                              <div className="col-md-3">
                                 <hr className={styles.hrtwo} />
                              </div>
                           </div>

                        </div>
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

            
                     <div className={styles.cardProduct}>
                        <img className="card-img-top" src={imageone} alt="Card image cap" />
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
                                 <hr />
                              </div>
                              <div className="col-md-6">
                                 <i className="fa fa-star"></i>
                                 <i className="fa fa-star"></i>
                                 <i className="fa fa-star"></i>
                                 <i className="fa fa-star"></i>
                              </div>
                              <div className="col-md-3">
                                 <hr className={styles.hrtwo} />
                              </div>
                           </div>

                        </div>
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


                  </div>







               </div>
            </div>
            {/* </div> */}
         </div>
      </section>
   )
}

export default ProductComponent;