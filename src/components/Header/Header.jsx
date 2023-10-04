import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import "../../styles/Header.css";
import engflag from "../../assets/icons/engflag.png";
import azeflag from "../../assets/icons/azeflag.png";

import { Link } from 'react-router-dom';
import i18n from '../../i18n';
import { ToastContainer, toast } from 'react-toastify';


function Header() {

    const { t, i18n } = useTranslation();


    const changeLanguageFunction = async (lang) => {
        await i18n.changeLanguage(lang)
    }

    const logoutSite = () => {
        toast("Hesabdan çıxış edildi")
    }


    const [categoryMenuTitleTwo, setCategoryMenuTitleTwo] = useState([])

    const [mouseOverLink, setMouseOverLink] = useState({
        display: "none",
        height: '0',
    })
    const [mouseOverLinkTwo, setMouseOverLinkTwo] = useState({
        display: "none",
        height: '0'
    })
    const [mouseOverLinkThree, setMouseOverLinkThree] = useState({
        display: "none",
        height: '0'
    })
    const [mouseOverLinkFour, setMouseOverLinkFour] = useState({
        display: "none",
        height: '0'
    })
    const [mouseOverLinkFive, setMouseOverLinkFive] = useState({
        display: "none",
        height: '0'
    })
    let categoryNavigationBar = [
        [`${t('smartphones')}`, `${t('push-button phones')}`, `${t('landline phones')}`, `${t('phone accessories')}`, `${t('headphone accessories')}`, `${t('headphones')}`],
        [`${t('smart watches')}`, `${t('smart bracelets')}`, `${t('wrist watches')}`, `${t('watch accessories')}`, `${t('childrens smart watches')}`, `${t('smart equipment')}`],
        [`${t('computers')}`, `${t('notebooks')}`, `${t('tablets')}`, `${t('monitors')}`, `${t('computer parts')}`, `${t('peripheral equipments')}`],
        [`${t('great technique')}`, `${t('food preparation')}`, `${t(`preparation of drink`)}`],
        [`${t('vacuum cleaners')}`, `${t('robot vacuum cleaners')}`, `${t(`steam regulators`)}`, `${t('sewing machines')}`, `${t('climate technology')}`, `${t(`irons`)}`],
        [],
        []
    ]


    const handleMouseOver = (e) => {
        setCategoryMenuTitleTwo(categoryNavigationBar[e.target.id]);
        if (e.target.id == 0) {
            setMouseOverLink({
                display: 'block',
                height: '500px'
            })
            setMouseOverLinkTwo({
                display: 'none',
            })
            setMouseOverLinkThree({
                display: 'none',
            })
            setMouseOverLinkFour({
                display: 'none',
            })
            setMouseOverLinkFive({
                display: 'none',
            })
        }
        else if (e.target.id == 1) {
            setMouseOverLink({
                display: 'none',
            })
            setMouseOverLinkTwo({
                display: 'block',
                height: '500px'
            })
            setMouseOverLinkThree({
                display: 'none'
            })
            setMouseOverLinkFour({
                display: 'none',
            })
            setMouseOverLinkFive({
                display: 'none',
            })
        }
        else if (e.target.id == 2) {
            setMouseOverLinkThree({
                display: 'block',
                height: '500px'
            })
            setMouseOverLinkTwo({
                display: 'none',
            })
            setMouseOverLinkFour({
                display: 'none',
            })
            setMouseOverLink({
                display: 'none',
            })
            setMouseOverLinkFive({
                display: 'none',
            })
        }
        else if (e.target.id == 3) {
            setMouseOverLinkThree({
                display: 'none',
            })
            setMouseOverLink({
                display: 'none'
            })
            setMouseOverLinkTwo({
                display: 'none',
            })
            setMouseOverLinkFour({
                display: 'block',
                height: '500px'
            })
            setMouseOverLinkFive({
                display: 'none',
            })
        }
        else if (e.target.id == 4) {
            setMouseOverLinkThree({
                display: 'none',
            })
            setMouseOverLink({
                display: 'none'
            })
            setMouseOverLinkTwo({
                display: 'none',
            })
            setMouseOverLinkFour({
                display: 'none',
            })
            setMouseOverLinkFive({
                display: 'block',
                height: '500px'
            })
        }
        else if (e.target.id == 5) {
            setMouseOverLinkThree({
                display: 'none',
            })
            setMouseOverLink({
                display: 'none'
            })
            setMouseOverLinkTwo({
                display: 'none',
            })
            setMouseOverLinkFour({
                display: 'none',
            })
            setMouseOverLinkFive({
                display: 'none',
            })
        }
        else if (e.target.id == 6) {
            setMouseOverLinkThree({
                display: 'none',
            })
            setMouseOverLink({
                display: 'none'
            })
            setMouseOverLinkTwo({
                display: 'none',
            })
            setMouseOverLinkFour({
                display: 'none',
            })
            setMouseOverLinkFive({
                display: 'none',
            })
        }
    }
    const handleMouseLeave = () => {
        allProductCategoryHide()
    }
    const allProductCategoryHide = () => {
        setMouseOverLinkThree({
            display: 'none',
        })
        setMouseOverLink({
            display: 'none'
        })
        setMouseOverLinkTwo({
            display: 'none',
        })
        setMouseOverLinkFour({
            display: 'none',
        })
        setMouseOverLinkFive({
            display: 'none',
        })
    }



    return (
        <section>

            <section className="headerSection">
                <div className="container">
                    <ToastContainer />
                    <div className="row laptop-header-view">
                        <div className="col-lg-3  col-md-3 col-sm-3 col-3"> {/*  1ci-div */}
                            <center>
                                <a href="tel:"><span className="spanTelNumber"> +994 70 777 77 77</span> </a>
                                <Link to="/">
                                    <a className="navbar-brand electro"> <span >AF</span><span className="logo">Store.</span></a>
                                </Link>
                            </center>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-5 col-5">{/*  2ci-div */}
                            <div className="row ">
                                <center>
                                    <div className="col-lg-9 col-md-9 col-sm-10 col-12 input-search-left-div">
                                        <input className="form-control input-search" type="search" placeholder="Search" aria-label="Search" />
                                        <div className="search-container">
                                            <input className="form-control" type="text" placeholder="Ara..." />
                                            <i className="fa fa-search"></i>
                                        </div>
                                    </div>
                                </center>
                                <div className="col-lg-3 col-md-3 col-sm-2 col-3 input-search-right-div  ">
                                    <button className="search-button" type="submit">Search</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-4"> {/*  3 cu-div */}
                            <div className="commondiv">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4  col-sm-4 col-4">
                                        <center>
                                            <Link to="/">
                                                <a className="nav-link">
                                                    <span className="span-help">{t('help')}</span>
                                                </a>
                                            </Link>

                                            <div className='nav-link-account'>
                                                <Link to="/login">
                                                    <a className="nav-link ">
                                                        <i className="fa fa-user"></i>
                                                        <center>
                                                            <span className="favourite-span-user">{t('account')}</span>
                                                        </center>

                                                    </a>
                                                </Link>

                                                <div className="hoverDivUserData">
                                                    <ul>
                                                        <Link to="/userinfo/orders">
                                                            <li>Bütün sifarişlərim</li>
                                                        </Link>
                                                        <Link to="/userinfo/rating">
                                                            <li>Dəyərləndirmələrim</li>
                                                        </Link>
                                                        <Link to="/userinfo/info">
                                                            <li>İstifadəçi məlumatlarım</li>
                                                        </Link>
                                                        <li onClick={logoutSite}>Çıxış</li>
                                                    </ul>
                                                </div>

                                            </div>

                                        </center>
                                    </div>
                                    <div className=" col-lg-4  col-md-4 col-sm-4 col-4">
                                        <center>
                                            <Link to="/about">
                                                <a className="nav-link  favourite-span-about"><span>{t('about')}</span></a>
                                            </Link>
                                            <Link to="/favorite" >
                                                <a className="nav-link">
                                                    <i className="fa fa-heart"></i>
                                                    <center>
                                                        <span className="favourite-span-fav">{t('favorite')}</span>
                                                    </center>
                                                </a>
                                            </Link>
                                        </center>
                                    </div>
                                    <div className="col-lg-4  col-md-4 col-sm-4 col-4">
                                        <center>
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span> {i18n.language} </span> <img className="flag" src={azeflag} />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-lang" aria-labelledby="navbarDropdown">
                                                <a onClick={() => changeLanguageFunction('Az')} className="dropdown-item" href="#"> <img className="flag" src={azeflag} /> Az</a>
                                                <a onClick={() => changeLanguageFunction('En')} className="dropdown-item" href="#"><img className="flag" src={engflag} />En</a>
                                            </div>
                                            <Link to="/basket">
                                                <a className="nav-link">
                                                    <i className="fa fa-shopping-basket"></i>
                                                    <center>
                                                        <span className="favourite-span-basket">{t('basket')}</span>
                                                    </center>
                                                </a>
                                            </Link>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mobile-header-view">
                        <div className="mobile-header-one">
                            <div className="flex-header-one">
                                <div>
                                    <Link to="/">
                                        <a className="navbar-brand electro"> <span >AF</span><span className="logo">Store.</span></a>
                                    </Link>
                                </div>
                                <div>
                                    <a href="tel:"><span className="spanTelNumber"> +994 70 777 77 77</span> </a>
                                </div>
                                <div>
                                    <Link to="/">
                                        <a className="nav-link">
                                            <span className="span-help">{t('help')}</span>
                                        </a>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/about">
                                        <a className="nav-link  favourite-span-about">
                                            <span className='span-about'>{t('about')}</span>
                                        </a>
                                    </Link>
                                </div>
                                <div>
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="language-selected-text"> {i18n.language} </span> <img className="flag" src={azeflag} />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-lang" aria-labelledby="navbarDropdown">
                                        <a onClick={() => changeLanguageFunction('AZ')} className="dropdown-item" href="#"> <img className="flag" src={azeflag} /> AZ</a>
                                        <a onClick={() => changeLanguageFunction('EN')} className="dropdown-item" href="#"><img className="flag" src={engflag} />EN</a>
                                    </div>
                                </div>

                            </div>
                            <div className="flex-header-two">
                                <div>
                                    <Link to="/login">
                                        <a className="nav-link">
                                            <i className="fa fa-user"></i>
                                            <center>
                                                <span className="favourite-span-user">{t('account')}</span>
                                            </center>
                                        </a>
                                    </Link>
                                </div>
                                <div>
                                    <center>
                                        <Link to="/favorite" >
                                            <a className="nav-link">
                                                <i className="fa fa-heart"></i>
                                                <center>
                                                    <span className="favourite-span-fav">{t('favorite')}</span>
                                                </center>
                                            </a>
                                        </Link>
                                    </center>
                                </div>
                                <div>
                                    <center>
                                        <Link to="/basket">
                                            <a className="nav-link">
                                                <i className="fa fa-shopping-basket"></i>
                                                <center>
                                                    <span className="favourite-span-basket">{t('basket')}</span>
                                                </center>
                                            </a>
                                        </Link>
                                    </center>
                                </div>
                            </div>
                            <div className="flex-header-three">
                                <div className="search-container">
                                    <input className="form-control" type="text" placeholder="Ara..." />
                                    <i className="fa fa-search"></i>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-3  col-md-3 col-sm-3 col-3"> }
                          
                        </div> */}
                        {/* <div className="col-lg-6 col-md-6 col-sm-5 col-5">
                            <div className="row ">
                                <center>
                                    <div className="col-lg-9 col-md-9 col-sm-10 col-12 input-search-left-div">
                                        <input className="form-control input-search" type="search" placeholder="Search" aria-label="Search" />
                                        <div className="search-container">
                                            <input className="form-control" type="text" placeholder="Ara..." />
                                            <i className="fa fa-search"></i>
                                        </div>
                                    </div>
                                </center>
                                <div className="col-lg-3 col-md-3 col-sm-2 col-3 input-search-right-div  ">
                                    <button className="search-button" type="submit">Search</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-4"> 
                            <div className="commondiv">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4  col-sm-4 col-4">
                                        <center>
                                            <Link to="/">
                                                <a className="nav-link">
                                                    <span className="span-help">{t('help')}</span>
                                                </a>
                                            </Link>

                                            <div className='nav-link-account'>
                                                <Link to="/login">
                                                    <a className="nav-link ">
                                                        <i className="fa fa-user"></i>
                                                        <center>
                                                            <span className="favourite-span-user">{t('account')}</span>
                                                        </center>

                                                    </a>
                                                </Link>

                                                <div className="hoverDivUserData">
                                                    <ul>
                                                        <Link to="/userinfo/orders">
                                                            <li>Bütün sifarişlərim</li>
                                                        </Link>
                                                        <Link to="/userinfo/rating">
                                                            <li>Dəyərləndirmələrim</li>
                                                        </Link>
                                                        <Link to="/userinfo/info">
                                                            <li>İstifadəçi məlumatlarım</li>
                                                        </Link>
                                                        <li onClick={logoutSite}>Çıxış</li>
                                                    </ul>
                                                </div>

                                            </div>

                                        </center>
                                    </div>
                                    <div className=" col-lg-4  col-md-4 col-sm-4 col-4">
                                        <center>
                                            <Link to="/about">
                                                <a className="nav-link  favourite-span-about"><span>{t('about')}</span></a>
                                            </Link>
                                            <Link to="/favorite" >
                                                <a className="nav-link">
                                                    <i className="fa fa-heart"></i>
                                                    <center>
                                                        <span className="favourite-span-fav">{t('favorite')}</span>
                                                    </center>
                                                </a>
                                            </Link>
                                        </center>
                                    </div>
                                    <div className="col-lg-4  col-md-4 col-sm-4 col-4">
                                        <center>
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span> {i18n.language} </span> <img className="flag" src={azeflag} />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-lang" aria-labelledby="navbarDropdown">
                                                <a onClick={() => changeLanguageFunction('Az')} className="dropdown-item" href="#"> <img className="flag" src={azeflag} /> Az</a>
                                                <a onClick={() => changeLanguageFunction('En')} className="dropdown-item" href="#"><img className="flag" src={engflag} />En</a>
                                            </div>
                                            <Link to="/basket">
                                                <a className="nav-link">
                                                    <i className="fa fa-shopping-basket"></i>
                                                    <center>
                                                        <span className="favourite-span-basket">{t('basket')}</span>
                                                    </center>
                                                </a>
                                            </Link>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>







                </div>
            </section>
            <nav className="navbar-two navbar-expand-lg" >
                <div className="container" onMouseLeave={handleMouseLeave}>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/products"><a id="0" onMouseOver={handleMouseOver} className="nav-item nav-link"> {t('smartphones and accessories')}</a>
                            </Link>
                            <Link to="/products"><a id="1" onMouseOver={handleMouseOver} className="nav-item nav-link" >{t('smart gadgets')}</a></Link>
                            <Link to="/products"><a id="2" onMouseOver={handleMouseOver} className="nav-item nav-link" >{t('notebooks, PCs, tablets')}</a></Link>
                            <Link to="/products"><a id="3" onMouseOver={handleMouseOver} className="nav-item nav-link" >{t('kitchen equipment')}</a></Link>
                            <Link to="/products"><a id="4" onMouseOver={handleMouseOver} className="nav-item nav-link" >{t('household appliances')}</a></Link>
                            <Link to="/products"><a id="5" onMouseOver={handleMouseOver} className="nav-item nav-link" >{t('best sellers')}</a></Link>
                            <Link to="/products"><a id="6" onMouseOver={handleMouseOver} className="nav-item nav-link" >{t('most liked')}</a></Link>
                        </div>
                    </div>
                    <div style={{ display: mouseOverLink.display, height: mouseOverLink.height }} id="navigationbar">
                        <div id="navbarcategorydivone">
                            <div className="wrapper">
                                <div className="row">
                                    {(categoryMenuTitleTwo).map((item) => (
                                        <div className="col-md-2">
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="row">
                                    <div className="col-md-2">

                                    </div>
                                    <div className="col-md-2">

                                    </div>
                                    <div className="col-md-2">

                                    </div>
                                    <div className="col-md-2">
                                        <li className="categoryThreeOneLine">{t('protective glass')}</li>
                                        <li>{t('wireless energy harvesting device')}</li>
                                        <li>{t('protective cover')} </li>
                                        <li>{t('uSB cables')}</li>
                                        <li>{t('power banks')}</li>
                                        <li>{t('adapters')}</li>
                                        <li>{t('sD cards')}</li>
                                        <li>{t('selfie sticks')}</li>
                                        <li>{t('gamepads')}</li>
                                        <li>{t('magsafes')}</li>
                                    </div>
                                    <div className="col-md-4">
                                        <li className="categoryThreeOneLine">{t('bluetooth wireless headphones')}</li>
                                        <li>{t('tWS wireless headphones')}</li>
                                        <li>{t('wired headphones')}</li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: mouseOverLinkTwo.display, height: mouseOverLinkTwo.height }} id="navigationbartwo">
                        <div id="navbarcategorydivone">
                            <div className="wrapper">
                                <div className="row">
                                    {(categoryMenuTitleTwo).map((item) => (
                                        <div className="col-md-2">
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="row">
                                    <div className="col-md-2">

                                    </div>
                                    <div className="col-md-2">

                                    </div>
                                    <div className="col-md-2">

                                    </div>
                                    <div className="col-md-2">

                                    </div>
                                    <div className="col-md-2">

                                    </div>
                                    <div className="col-md-2">
                                        <li className="categoryThreeOneLine">{t('management hub')}</li>
                                        <li>{t('sensors')}</li>
                                        <li>{t('lighting')}</li>
                                        <li>{t('iP video surveillance cameras')}</li>
                                        <li>{t('smart locks')}</li>
                                        <li>{t('smart slots')}</li>
                                        <li>{t('smart kits')}</li>
                                        <li>{t('intercoms')}</li>
                                        <li>{t('extinguishers')}</li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: mouseOverLinkThree.display, height: mouseOverLinkThree.height }} id="navigationbarthree">
                        <div id="navbarcategorydivone">
                            <div className="wrapper">
                                <div className="row">
                                    {(categoryMenuTitleTwo).map((item) => (
                                        <div className="col-md-2">
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="row">
                                    <div className="col-md-2">
                                        <li className="categoryThreeOneLine"> {t('system blocks')}</li>
                                        <li>{t('monitors')}</li>
                                        <li>{t('monoblocks')}</li>
                                    </div>
                                    <div className="col-md-2">

                                    </div>
                                    <div className="col-md-2">

                                    </div>
                                    <div className="col-md-2">

                                    </div>
                                    <div className="col-md-2">
                                        <li className="categoryThreeOneLine">{t('management hub')}</li>
                                        <li>{t('video card')}</li>
                                        <li>{t('motherboard')} </li>
                                        <li>{t('operating memory')}</li>
                                        <li>{t('cooling systems')}</li>
                                        <li>{t('power supply')}</li>
                                        <li>{t('processors')}</li>
                                        <li>{t('cases for the system unit')}</li>
                                    </div>
                                    <div className="col-md-2">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: mouseOverLinkFour.display, height: mouseOverLinkFour.height }} id="navigationbarfour">
                        <div id="navbarcategorydivone">
                            <div className="wrapper">
                                <div className="row">
                                    {(categoryMenuTitleTwo).map((item) => (
                                        <div className="col-md-2">
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="row">
                                    <div className="col-md-2">
                                        <li className="categoryThreeOneLine">{t('plates')}</li>
                                        <li>{t('stoves')}</li>
                                        <li>{t('aspirators')}</li>
                                        <li>{t('dishwashers')} </li>
                                        <li>{t('refrigerators')}</li>
                                        <li>{t('freezers')}</li>
                                        <li>{t('washing machines')}</li>
                                        <li>{t('microwave ovens')}</li>
                                        <li>{t('drawer pulls')}</li>
                                        <li>{t('grinders for food waste')}</li>
                                        <li>{t('dispensations')}</li>
                                        <li>{t('cigarette lighters')}</li>
                                        <li>{t('ice maker')}</li>
                                    </div>
                                    <div className="col-md-2">
                                        <li className="categoryThreeOneLine">{t('management hub')}</li>
                                        <li>{t('blenders')}</li>
                                        <li>{t('meat grinders')}</li>
                                        <li>{t('baking machines')}</li>
                                        <li>{t('mixers')}</li>
                                        <li>{t('izgara')}</li>
                                        <li>{t('multicookers')}</li>
                                        <li>{t('steam cookers')}</li>
                                        <li>{t('toasters')}</li>
                                        <li>{t('kitchen scales')}</li>
                                        <li>{t('slicers')}</li>
                                        <li>{t('sandwich maker')}</li>
                                        <li>{t('a pancake maker')}</li>
                                        <li>{t('chopper')}</li>
                                        <li>{t('aerogril')}</li>
                                        <li>{t('kitchen mixers')}</li>
                                        <li>{t('induction plates')}</li>
                                        <li>{t('mini ovens')}</li>
                                        <li></li>
                                    </div>
                                    <div className="col-md-2">
                                        <li className="categoryThreeOneLine">{t('electric kettles')}</li>
                                        <li>{t('induction kettles')}</li>
                                        <li>{t('citrus press')}</li>
                                        <li>{t('juicers')}</li>
                                        <li>{t('coffee makers')}</li>
                                        <li>{t('thermopots')}</li>
                                        <li>{t('drip coffee makers')}</li>
                                        <li>{t('coffee grinders')}</li>
                                        <li>{t('cappuccinators')}</li>
                                        <li>{t('milk frothers')}</li>
                                        <li>{t('coffee capsule')}</li>
                                        <li>{t('coffee')}</li>
                                        <li>{t('syrups for coffee')}</li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: mouseOverLinkFive.display, height: mouseOverLinkFive.height }} id="navigationbarfive">
                        <div id="navbarcategorydivone">
                            <div className="wrapper">
                                <div className="row">
                                    {(categoryMenuTitleTwo).map((item) => (
                                        <div className="col-md-2">
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="row">
                                    <div className="col-md-2">

                                    </div>
                                    <div className="col-md-2">

                                    </div>
                                    <div className="col-md-2">

                                    </div>
                                    <div className="col-md-2">

                                    </div>
                                    <div className="col-md-2">
                                        <li className="categoryThreeOneLine">{t('management hub')}</li>
                                        <li>{t('air conditioners')}</li>
                                        <li>{t('ventilators')}</li>
                                        <li>{t('combi systems')}</li>
                                        <li>{t('humidifiers')}</li>
                                        <li>{t('water heaters')}</li>
                                        <li>{t('fireplaces')}</li>
                                        <li>{t('hydrometers')}</li>
                                        <li>{t('thermometers')}</li>
                                        <li>{t('convectors')}</li>
                                        <li>{t('infrared heaters')}</li>
                                        <li>{t('climate complexes')}</li>
                                        <li>{t('heater fans')}</li>
                                        <li>{t('white heaters')}</li>
                                        <li>{t('sectional radiators')}</li>
                                        <li>{t('panel radiators')}</li>
                                        <li>{t('regulators for Combi')}</li>
                                        <li>{t('gas reducers')}</li>
                                        <li>{t('warm floor')}</li>
                                    </div>
                                    <div className="col-md-2">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    )
}
export default Header;