import React, { useState } from 'react';
import "./Header.css";
import engflag from "../../assets/icons/engflag.png";
import azeflag from "../../assets/icons/azeflag.png";
import heaerticon from "../../assets/icons/heart.png";
import shopcart from "../../assets/icons/shop-cart.png";
import accounticon from "../../assets/icons/account.png";
import { Link } from 'react-router-dom';

function Header() {


    const [categoryMenuTitleTwo, setCategoryMenuTitleTwo] = useState([])
    const [categoryMenuTitleTwoElements, setCategoryMenuTitleTwoElements] = useState([])

    // let categoryNavigationBar = [
    //     ["Smartfonlar", "Duymeli telefonlar", "Stasionar telefonlar", "Telefon aksesuarlari" ,"Qulaqliqlar", "Qulaqliq aksesuarlari"],
    //     ["Smart saatlar", "Smart qolbaqlar", "Qol saatlari", "Saat aksesuarlari", "Usaq smart saatlari", "Smart avadanliqlari"],
    //     ["Komputerler", "Notboklar", "Planşetlər", "Monitorlar", "Kompüterler hisseleri", "Periferik avadanliqlar"],
    //     ["Böyük texnika", "Yemək hazırlanması", "İçki hazırlanması"],
    //     ["Tozsoranlar", "Robot tozsoranlar", "Buxarlı tənzimləyicilər", "Tikiş maşınları", "Buxarlı generatorlar", "Iqlim texnikasi", "Yuyucu tozsoranlar", "Ütülər"],
    // ]
 
    let categoryNavigationBar = [
        {
            "categoryTitle":["Smartfonlar","Duymeli telefonlar","Stasionar telefonlar","Telefon aksesuarlari","Qulaqliqlar","Qulaqliq aksesuarlari"],
            "categoryElements":["Qoruyucususe","qoruyucu ortuk"]
        },
        {
            "categoryTitle":["Smart saatlar", "Smart qolbaqlar", "Qol saatlari", "Saat aksesuarlari", "Usaq smart saatlari", "Smart avadanliqlari"],
            "categoryElements":["ss2222","jhj2222","uiui222"]
        },
        {
            "categoryTitle": ["Komputerler", "Notboklar", "Planşetlər", "Monitorlar", "Kompüterler hisseleri", "Periferik avadanliqlar"],
            "categoryElements":["ss33333","gg3333",]
        },
        {
            "categoryTitle":  ["Böyük texnika", "Yemək hazırlanması", "İçki hazırlanması"],
            "categoryElements":["ss4444","jh4444","uiu444"]
        },
        {
            "categoryTitle":   ["Tozsoranlar", "Robot tozsoranlar", "Buxarlı tənzimləyicilər", "Tikiş maşınları", "Buxarlı generatorlar", "Iqlim texnikasi", "Yuyucu tozsoranlar", "Ütülər"],
            "categoryElements":["ss555","jh555","555"]
        },
    ]
 


    const handleMouseOver = (e) => {
        setCategoryMenuTitleTwo(categoryNavigationBar[e.target.id].categoryTitle)
        setCategoryMenuTitleTwoElements(categoryNavigationBar[e.target.id].categoryElements)
    }

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
                                    <div className="col-md-3">
                                        <center>
                                            <li className="nav-item ">
                                                <a className="nav-link nav-link-help" href="#">Dəstək<span className="sr-only">(current)</span></a>
                                            </li>
                                            <li className="nav-item-two">
                                                <Link to="/login">
                                                    <a className="nav-link">
                                                        <img className="icon-right" src={accounticon} />
                                                        <center>
                                                            Hesab
                                                       </center>
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
                                            <a className="nav-link nav-link-fav-bottom" href="#">
                                                <img className="icon-right favourite" src={heaerticon} />
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
                                                    AZE  <img className="flag" src={azeflag} />
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-lang" aria-labelledby="navbarDropdown">
                                                    <a className="dropdown-item" href="#"> <img className="flag" src={azeflag} /> AZE</a>
                                                    <a className="dropdown-item" href="#"><img className="flag" src={engflag} />ENG</a>
                                                </div>
                                            </li>
                                            <li className="nav-item-two  navbar-right ">
                                                <a className="nav-link" href="#">
                                                    <img className="icon-right-basket" src={shopcart} />
                                                    <center>
                                                        Səbət
                                                    </center>
                                                </a>
                                            </li>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="navbar-two navbar-expand-lg" >
                <div className="container " id="navigationbar">

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        <Link to="/products"><a id="0" onMouseOver={handleMouseOver} className="nav-item nav-link">Smartfonlar və aksesuarlar</a></Link>
                        <Link to="/products"><a id="1" onMouseOver={handleMouseOver} className="nav-item nav-link" >Smart qadjetlər</a></Link>
                        <Link to="/products"><a id="2" onMouseOver={handleMouseOver} className="nav-item nav-link" >Notbuklar, PK, planşetlər</a></Link>
                        <Link to="/products"><a id="3" onMouseOver={handleMouseOver} className="nav-item nav-link" >Mətbəx avadanlıqları</a></Link>
                        <Link to="/products"><a id="4" onMouseOver={handleMouseOver} className="nav-item nav-link" >Ev texnikası</a></Link>
                        <Link to="/products"><a className="nav-item nav-link" >Ən çox satılanlar</a></Link>
                        <Link to="/products"><a className="nav-item nav-link" >Ən çox bəyənilənlər</a></Link>
                        </div>
                    </div>
                    <div id="navbarcategorydiv">
                        <div className="wrapper">
                            {console.log("data",categoryMenuTitleTwo)}
                            {categoryMenuTitleTwo.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}
                            <ul>
                                { categoryMenuTitleTwoElements.map((item,index)=>(<li key={index}>{item}</li>))}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    )
}
export default Header;