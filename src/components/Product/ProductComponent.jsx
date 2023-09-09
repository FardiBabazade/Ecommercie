import React from 'react';
import Select from 'react-select'
import styles from "./ProductComponent.module.css";
import backproductimg from "../../assets/images/backproduct.png";
import hearticon from "../../assets/icons/heart-two.png";
import infoicon from "../../assets/icons/info.png";
import shopcarttwo from "../../assets/icons/shop-cart-two.png";
import imageone from "../../assets/images/shop1.webp"
import imagetwo from "../../assets/images/shop2.webp"
import imagethree from "../../assets/images/shop3.webp"




function ProductComponent() {

   const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
   ]

   return (
      <section className="productpage">

         <div className={styles.imgdiv}>
            <h3 className={styles.productimgtitle}>Məhsullar</h3>
            <img className={styles.backimgproduct} src={backproductimg} />
         </div>
         <div className="container-fluid">
            <div className="row">
               <div className="col-md-4">
                  <div className={styles.categoryFilter}>
                     <div >
                        <h3 className={styles.categoryFilterTitle}>Əlaqəli məhsullar</h3>
                        <ul className={styles.categoryFilterTitleChildren}>
                           <li>Əlaqəli məhsullar1</li>
                           <li>Əlaqəli məhsullar2</li>
                           <li>Əlaqəli məhsullar3</li>
                           <li>Əlaqəli məhsullar4</li>
                        </ul>

                        <h3 className={styles.categoryFilterTitle}>Brend</h3>
                        <label className={styles.labelcategory} for="vehicle1">Hp</label>
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /><br />
                        <label className={styles.labelcategory} for="vehicle2">Acer</label>
                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" /><br />
                        <label className={styles.labelcategory} for="vehicle3">Apple</label>
                        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" /><br />
                        <label className={styles.labelcategory} for="vehicle2">Samsung</label>
                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" /><br />
                        <label className={styles.labelcategory} for="vehicle3">Asus</label>
                        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />


                        <h3 className={styles.categoryFilterTitle}>Reyting</h3>
                        <label className={styles.labelcategory} for="vehicle1">1 ulduzlu</label>
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /><br />
                        <label className={styles.labelcategory} for="vehicle2">2 ulduzlu</label>
                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" /><br />
                        <label className={styles.labelcategory} for="vehicle3">Apple</label>
                        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" /><br />


                        <h3 className={styles.categoryFilterTitle}>Qiymət</h3>
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
                        <h3 className={styles.categoryFilterTitle}>Rəng</h3>
                        <input type="color" />

                     </div>
                  </div>
               </div>
               <div className="col-md-8">
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
                     </div> <div className={styles.cardProduct}>
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
                     </div> <div className={styles.cardProduct}>
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
                     </div> <div className={styles.cardProduct}>
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
                     </div> <div className={styles.cardProduct}>
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
            {/* </div> */}
         </div>
      </section>
   )
}

export default ProductComponent;