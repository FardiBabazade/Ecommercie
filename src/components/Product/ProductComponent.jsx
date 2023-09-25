import React from 'react';
import Select from 'react-select'
import styles from "../../styles/ProductComponent.module.css";
import backproductimg from "../../assets/images/backproduct.png";
import hearticon from "../../assets/icons/heart-two.png";
import infoicon from "../../assets/icons/info.png";
import shopcarttwo from "../../assets/icons/shop-cart-two.png";
import imageone from "../../assets/images/shop1.webp"



function ProductComponent() {


   const options = [
      { value: 'Son 1 ay', label: 'Son 1 ay' },
      { value: 'Son 1 il', label: 'Son 1 il' },
      { value: 'Bu gün alınanlar', label: 'Bu gün alınanlar' }
   ]

   return (
      <section className={styles.productpage}>
         <div className={styles.imgdiv}>
            <h3 className={styles.productimgtitle}>Məhsullar</h3>
            <img className={styles.backimgproduct} src={backproductimg} />
         </div>
         <div className="container">
            <div className="row">
               <div className="col-md-3">
                  <div className={styles.categoryFilter}>
                     <div>
                        <div id="accordion" className={styles.myaccordion}>
                           <div className={styles.card}>
                              <div className={styles.cardheader}>
                                 <h2 className="mb-0">
                                    <div className={`${styles.btnlink} d-flex align-items-center justify-content-between btn  collapsed`}
                                       data-toggle="collapse" data-target="#collapseOne"
                                       aria-expanded="false" aria-controls="collapseOne">
                                       <span>Əlaqəli məhsullar</span>
                                       <div className={styles.plusminusIcon}>
                                          <i className={`fa fa-plus`}></i>
                                       </div>
                                    </div>
                                 </h2>
                              </div>
                              <div id="collapseOne" className="collapse">
                                 <div class="card-body">
                                    <p className={styles.labelcategory} >Əlaqəli məhsullar1</p>
                                    <p className={styles.labelcategory}>Əlaqəli məhsullar2</p>
                                    <p className={styles.labelcategory}>Əlaqəli məhsullar3</p>
                                    <p className={styles.labelcategory}>Əlaqəli məhsullar4</p>
                                 </div>
                              </div>
                           </div>
                           <div className={styles.card}>
                              <div className={styles.cardheader}>
                                 <h2 className="mb-0">
                                    <div className={`${styles.btnlink} d-flex align-items-center justify-content-between btn  collapsed`}
                                       data-toggle="collapse"
                                       data-target="#collapseTwo"
                                       aria-expanded="false"
                                       aria-controls="collapseOne">
                                       <span>Brend</span>
                                       <div className={styles.plusminusIcon}>
                                          <i className={`fa fa-plus`}></i>
                                       </div>
                                    </div>
                                 </h2>
                              </div>
                              <div id="collapseTwo" className={`collapse ${styles.inputCollapse}`}>
                                 <div class="card-body">
                                    <ul>
                                       <div className="row">
                                          <div className="col-md-6">
                                             <p className={styles.labelcategory} for="vehicle1">Hp</p>
                                             <p className={styles.labelcategory} for="vehicle2">Acer</p>
                                             <p className={styles.labelcategory} for="vehicle3">Apple</p>
                                             <p className={styles.labelcategory} for="vehicle4">Samsung</p>
                                             <p className={styles.labelcategory} for="vehicle5">Asus</p>
                                          </div>
                                          <div className="col-md-6">
                                             <input className={styles.checkBoxProduct} type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                             <input className={styles.checkBoxProduct} type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                             <input className={styles.checkBoxProduct} type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                                             <input className={styles.checkBoxProduct} type="checkbox" id="vehicle2" name="vehicle4" value="Car" />
                                             <input className={styles.checkBoxProduct} type="checkbox" id="vehicle3" name="vehicle5" value="Boat" />
                                          </div>
                                       </div>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className={styles.card}>
                              <div className={styles.cardheader} id="headingThree">
                                 <h2 className="mb-0">
                                    <div className={`${styles.btnlink} d-flex align-items-center justify-content-between btn  collapsed`}
                                       data-toggle="collapse"
                                       data-target="#collapseThree"
                                       aria-expanded="false"
                                       aria-controls="collapseOne">
                                       <span> Əlaqəli məhsullar</span>
                                       <div className={styles.plusminusIcon}>
                                          <i className={`fa fa-plus`}></i>
                                       </div>
                                    </div>
                                 </h2>
                              </div>
                              <div id="collapseThree" className={`collapse ${styles.inputCollapse}`} aria-labelledby="headingThree">
                                 <div className="card-body">
                                    <ul>
                                       <div className="row">
                                          <div className="col-md-6">
                                             <p className={styles.labelcategory} for="vehicle1">1 Ulduzlu</p>
                                             <p className={styles.labelcategory} for="vehicle2">2 Ulduzlu</p>
                                             <p className={styles.labelcategory} for="vehicle3">Apple</p>
                                          </div>
                                          <div className="col-md-6">
                                             <input className={styles.checkBoxProduct} type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                             <input className={styles.checkBoxProduct} type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                             <input className={styles.checkBoxProduct} type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                                          </div>
                                       </div>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>


                        {/* <h5 className={styles.categoryFilterTitle}>Qiymət</h5>
                        <div className="row">
                           <div className="col-md-3">
                              <input type="number" className={styles.filterInput} placeholder="min price" />
                           </div>
                           <div className="col-md-1">
                              -
                           </div>
                           <div className="col-md-3">
                              <input type="number" className={styles.filterInput} placeholder="max price" />
                           </div>
                        </div>
                        <h5 className={styles.categoryFilterTitle}>Rəng</h5>
                        <input type="color" /> */}





                     </div>
                  </div>
               </div>
               <div className="col-md-9">
                  <div className="row">
                     <div className="col-md-6">
                        <div className={styles.selectproduct}>
                           <Select options={options} />
                        </div>
                     </div>
                     <div className="col-md-6">
                        <h6 className={styles.showResultProduct} >Showing 1-12 of 16 results</h6>
                     </div>
                  </div>
                  <div className="row">

                     <div className="col-md-3" style={{ padding: 0 }}>
                        <div className={styles.cardProduct}>
                           <center>
                              <img className={styles.cardImgTwo} src={imageone} alt="Card image cap" />
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
                                    <hr className={styles.hrtwo} />
                                 </div>
                              </div>

                           </div>
                           <div className="card-footer">
                              <div className="row">
                                 <div className="col-md-4">
                                    <center>
                                       <img className={styles.productPageCardFooterIcons} src={hearticon} alt="" />
                                    </center>
                                 </div>
                                 <div className="col-md-4">
                                    <center>
                                       <img className={styles.productPageCardFooterIcons} src={infoicon} alt="" />
                                    </center>
                                 </div>
                                 <div className="col-md-4">
                                    <center>
                                       <img className={styles.productPageCardFooterIcons} src={shopcarttwo} alt="" />
                                    </center>
                                 </div>
                              </div>

                           </div>
                        </div>
                     </div>
                     <div className="col-md-3" style={{ padding: 0 }} >
                        <div className={styles.cardProduct}>
                           <center>
                              <img className={styles.cardImgTwo} src={imageone} alt="Card image cap" />
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
                                    <hr className={styles.hrtwo} />
                                 </div>
                              </div>

                           </div>
                           <div className="card-footer">
                              <div className="row">
                                 <div className="col-md-4">
                                    <center>
                                       <img className={styles.productPageCardFooterIcons} src={hearticon} alt="" />
                                    </center>
                                 </div>
                                 <div className="col-md-4">
                                    <center>
                                       <img className={styles.productPageCardFooterIcons} src={infoicon} alt="" />
                                    </center>
                                 </div>
                                 <div className="col-md-4">
                                    <center>
                                       <img className={styles.productPageCardFooterIcons} src={shopcarttwo} alt="" />
                                    </center>
                                 </div>
                              </div>

                           </div>
                        </div>
                     </div>
                     <div className="col-md-3" style={{ padding: 0 }}>
                        <div className={styles.cardProduct}>
                           <center>
                              <img className={styles.cardImgTwo} src={imageone} alt="Card image cap" />
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
                                    <hr className={styles.hrtwo} />
                                 </div>
                              </div>

                           </div>
                           <div className="card-footer">
                              <div className="row">
                                 <div className="col-md-4">
                                    <center>
                                       <img className={styles.productPageCardFooterIcons} src={hearticon} alt="" />
                                    </center>
                                 </div>
                                 <div className="col-md-4">
                                    <center>
                                       <img className={styles.productPageCardFooterIcons} src={infoicon} alt="" />
                                    </center>
                                 </div>
                                 <div className="col-md-4">
                                    <center>
                                       <img className={styles.productPageCardFooterIcons} src={shopcarttwo} alt="" />
                                    </center>
                                 </div>
                              </div>

                           </div>
                        </div>
                     </div>
                     <div className="col-md-3" style={{ padding: 0 }}>
                        <div className={styles.cardProduct}>
                           <center>
                              <img className={styles.cardImgTwo} src={imageone} alt="Card image cap" />
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
                                    <hr className={styles.hrtwo} />
                                 </div>
                              </div>

                           </div>
                           <div className="card-footer">
                              <div className="row">
                                 <div className="col-md-4">
                                    <center>
                                       <img className={styles.productPageCardFooterIcons} src={hearticon} alt="" />
                                    </center>
                                 </div>
                                 <div className="col-md-4">
                                    <center>
                                       <img className={styles.productPageCardFooterIcons} src={infoicon} alt="" />
                                    </center>
                                 </div>
                                 <div className="col-md-4">
                                    <center>
                                       <img className={styles.productPageCardFooterIcons} src={shopcarttwo} alt="" />
                                    </center>
                                 </div>
                              </div>

                           </div>
                        </div>
                     </div>
                     <div className="col-md-3" style={{ padding: 0 }}>
                        <div className={styles.cardProduct}>
                           <center>
                              <img className={styles.cardImgTwo} src={imageone} alt="Card image cap" />
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
                                    <hr className={styles.hrtwo} />
                                 </div>
                              </div>

                           </div>
                           <div className="card-footer">
                              <div className="row">
                                 <div className="col-md-4">
                                    <center>
                                       <img className={styles.productPageCardFooterIcons} src={hearticon} alt="" />
                                    </center>
                                 </div>
                                 <div className="col-md-4">
                                    <center>
                                       <img className={styles.productPageCardFooterIcons} src={infoicon} alt="" />
                                    </center>
                                 </div>
                                 <div className="col-md-4">
                                    <center>
                                       <img className={styles.productPageCardFooterIcons} src={shopcarttwo} alt="" />
                                    </center>
                                 </div>
                              </div>

                           </div>
                        </div>
                     </div>
                     <div className="col-md-3" style={{ padding: 0 }}>
                        <div className={styles.cardProduct}>
                           <center>
                              <img className={styles.cardImgTwo} src={imageone} alt="Card image cap" />
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
                                    <hr className={styles.hrtwo} />
                                 </div>
                              </div>

                           </div>
                           <div className="card-footer">
                              <div className="row">
                                 <div className="col-md-4">
                                    <center>
                                       <img className={styles.productPageCardFooterIcons} src={hearticon} alt="" />
                                    </center>
                                 </div>
                                 <div className="col-md-4">
                                    <center>
                                       <img className={styles.productPageCardFooterIcons} src={infoicon} alt="" />
                                    </center>
                                 </div>
                                 <div className="col-md-4">
                                    <center>
                                       <img className={styles.productPageCardFooterIcons} src={shopcarttwo} alt="" />
                                    </center>
                                 </div>
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