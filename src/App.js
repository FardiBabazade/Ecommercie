import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx"
import Registration from './pages/Registration.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import ForgotPasswordConfirmation from './pages/ForgotPasswordConfirmation.jsx';
import Product from './pages/Product';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/registration" element={<Registration />} ></Route>
          <Route path="/passwordrefresh" element={<ForgotPassword />} ></Route>
          <Route path="/passwordconfirm" element={<ForgotPasswordConfirmation />} ></Route>
          <Route path="/products" element={<Product />} ></Route>
        </Routes>
    </BrowserRouter>
  );
}
export default App;


/*  https://preview.colorlib.com/theme/locksmith/services.html */


/*

             
{/*               
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




             
             
             
             
              */