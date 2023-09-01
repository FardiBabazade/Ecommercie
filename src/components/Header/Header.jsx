import React from 'react';
import "./Header.css";
import engflag from "../../assets/icons/engflag.png";
import azeflag from "../../assets/icons/azeflag.png";
import heaerticon from "../../assets/icons/heart.png";
import shopcart from "../../assets/icons/shop-cart.png";
import accounticon from "../../assets/icons/account.png";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <section>
            <nav className="navbar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <a className="navbar-brand-one" href="#">+994 70 777 77 77</a>
                            <Link to="/">
                                <a className="navbar-brand electro">Ecommerce</a>
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-3">
                                    <div class="input-group-prepend">
                                        <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Categories</button>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                            <a class="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <input className="form-control input-search" type="search" placeholder="Search" aria-label="Search" />
                                </div>
                                <div className="col-md-3">
                                    <button className=" search-button" type="submit">Search</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <div className="row">
                                    <div className="col-md-2">
                                        <center>
                                            <li className="nav-item ">
                                                <a className="nav-link nav-link-help" href="#">Dəstək<span className="sr-only">(current)</span></a>
                                            </li>
                                            <li className="nav-item-two">
                                                <Link to="/login">
                                                    <a className="nav-link">
                                                        <center>
                                                            <img className="icon-right" src={accounticon} />
                                                        </center>Hesab
                                                         </a>
                                                </Link>
                                            </li>
                                        </center>
                                    </div>
                                    <div className="col-md-6">
                                        <li className="nav-item">
                                            <a className="nav-link nav-link-fav" href="#">Biz kimik?</a>
                                        </li>
                                        <li className="nav-item-two">
                                            <a className="nav-link nav-link-fav-bottom" href="#"><img className="icon-right favourite" src={heaerticon} />
                                                <center>
                                                    Seçilmişlər
                                              </center>
                                            </a>
                                        </li>
                                    </div>
                                    <div className="col-md-2">
                                        <center>
                                            <li className="nav-item dropdown lang">
                                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Dil
                                                 </a>
                                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <a className="dropdown-item" href="#"> <img className="flag" src={azeflag} /> Aze</a>
                                                    <a className="dropdown-item" href="#"><img className="flag" src={engflag} />Eng</a>
                                                </div>
                                            </li>
                                            <li className="nav-item-two  navbar-right ">
                                                <a className="nav-link" href="#"><img className="icon-right" src={shopcart} />Səbət</a>
                                            </li>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <nav class="navbar-two navbar-expand-lg">
                <div className="container">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-item nav-link" href="#">Smartfonlar <span></span></a>
                            <Link to="/products">  <a class="nav-item nav-link" >Komputerlər</a></Link>
                            <Link to="/products"> <a class="nav-item nav-link" >Planşsetlər</a></Link>
                            <Link to="/products">  <a class="nav-item nav-link" >Monitorlar</a></Link>
                            <Link to="/products"> <a class="nav-item nav-link" >Kameralar</a></Link>
                            <Link to="/products"> <a class="nav-item nav-link" >Aksesuarlar</a></Link>
                            <Link to="/products"> <a class="nav-item nav-link" >Ən çox satılanlar</a></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Header;