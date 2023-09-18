import React, { useState } from 'react';
import "../../styles/Header.css";
import engflag from "../../assets/icons/engflag.png";
import azeflag from "../../assets/icons/azeflag.png";
// import heaerticon from "../../assets/icons/heart.png";
// import shopcart from "../../assets/icons/shop-cart.png";
// import accounticon from "../../assets/icons/account.png";
import { Link } from 'react-router-dom';

function Header() {


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
        ["Smartfonlar", "Duymeli telefonlar", "Stasionar telefonlar", "Telefon aksesuarlari", "Qulaqliq aksesuarlari", "Qulaqliqlar"],
        ["Smart saatlar", "Smart qolbaqlar", "Qol saatlari", "Saat aksesuarlari", "Usaq smart saatlari", "Smart avadanliqlari"],
        ["Komputerler", "Notboklar", "Planşetlər", "Monitorlar", "Kompüterler hisseleri", "Periferik avadanliqlar"],
        ["Böyük texnika", "Yemək hazırlanması", "İçki hazırlanması"],
        ["Tozsoranlar", "Robot tozsoranlar", "Buxarlı tənzimləyicilər", "Tikiş maşınları", "Iqlim texnikasi", , "Ütülər"],
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
                    <div className="row">
                        <div className="col-md-2">
                            <a href="tel:"><span className="spanTelNumber"> +994 70 777 77 77</span> </a>
                            <Link to="/">
                                <a className="navbar-brand electro"> <span >AF</span><span className="logo">Store.</span></a>
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <center>
                                    <div className="col-md-9">
                                        <input className="form-control input-search" type="search" placeholder="Search" aria-label="Search" />
                                    </div>
                                </center>
                                <div className="col-md-3">
                                    <button className=" search-button" type="submit">Search</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="commondiv">
                                <div className="row">
                                    <div className="col-md-4">
                                        <center>
                                            <Link to="/userinfo/home">
                                                <a className="nav-link">
                                                    <span className="span-help">Dəstək</span>
                                                </a>
                                            </Link>
                                            <Link to="/login">
                                                <a className="nav-link">
                                                    <i className="fa fa-user"></i>
                                                    <center>
                                                        <span className="favourite-span-user">Hesab</span>
                                                    </center>
                                                </a>
                                            </Link>
                                        </center>
                                    </div>
                                    <div className="col-md-4">
                                        <center>
                                            <a className="nav-link  favourite-span-about"><span>Haqqımızda</span></a>
                                            <Link to="/favorite" >
                                                <a className="nav-link">
                                                    <i className="fa fa-heart"></i>
                                                    <center>
                                                        <span className="favourite-span-fav">Secilmisler</span>
                                                    </center>
                                                </a>
                                            </Link>
                                        </center>
                                    </div>
                                    <div className="col-md-4">
                                        <center>
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                               <span> AZE </span> <img className="flag" src={azeflag} />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-lang" aria-labelledby="navbarDropdown">
                                                <a className="dropdown-item" href="#"> <img className="flag" src={azeflag} /> AZE</a>
                                                <a className="dropdown-item" href="#"><img className="flag" src={engflag} />ENG</a>
                                            </div>
                                            <Link to="/basket">
                                                <a className="nav-link">
                                                    <i className="fa fa-shopping-basket"></i>
                                                    <center>
                                                        <span className="favourite-span-basket">Səbət</span>
                                                    </center>
                                                </a>
                                            </Link>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                            <Link to="/products"><a id="0" onMouseOver={handleMouseOver} className="nav-item nav-link"> Smartfonlar və aksesuarlar</a>
                            </Link>
                            <Link to="/products"><a id="1" onMouseOver={handleMouseOver} className="nav-item nav-link" >Smart qadjetlər</a></Link>
                            <Link to="/products"><a id="2" onMouseOver={handleMouseOver} className="nav-item nav-link" >Notbuklar, PK, planşetlər</a></Link>
                            <Link to="/products"><a id="3" onMouseOver={handleMouseOver} className="nav-item nav-link" >Mətbəx avadanlıqları</a></Link>
                            <Link to="/products"><a id="4" onMouseOver={handleMouseOver} className="nav-item nav-link" >Ev texnikası</a></Link>
                            <Link to="/products"><a id="5" onMouseOver={handleMouseOver} className="nav-item nav-link" >Ən çox satılanlar</a></Link>
                            <Link to="/products"><a id="6" onMouseOver={handleMouseOver} className="nav-item nav-link" >Ən çox bəyənilənlər</a></Link>
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
                                        <li className="categoryThreeOneLine">Qoruyucu şüşə</li>
                                        <li>Simsiz enerji toplama cihazı</li>
                                        <li>Qoruyucu örtük</li>
                                        <li>USB naqillər</li>
                                        <li>Qoruyucu örtük</li>
                                        <li>Poverbanklar</li>
                                        <li>Adapterlər</li>
                                        <li>Tutacaqlar</li>
                                        <li>SD kartlar</li>
                                        <li>Selfie çubuqları</li>
                                        <li>Gamepadlar</li>
                                        <li>Magsafelər</li>
                                    </div>
                                    <div className="col-md-4">
                                        <li className="categoryThreeOneLine">Bluetooth simsiz qulaqlıqlar</li>
                                        <li>TWS simsiz qulaqlıqlar</li>
                                        <li>Simli qulaqlıqlar</li>
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
                                        <li className="categoryThreeOneLine">İdarəetmə hub</li>
                                        <li>Sensorlar</li>
                                        <li>İşıqlandırma</li>
                                        <li>İP videomüşahidə kameraları</li>
                                        <li>Smart kilidlər</li>
                                        <li>Smart yuvalar</li>
                                        <li>Smart dəstlər</li>
                                        <li>Domofonlar</li>
                                        <li>Söndürənlər</li>
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
                                        <li className="categoryThreeOneLine"> Sistem blokları</li>
                                        <li>Monitorlar</li>
                                        <li>Monobloklar</li>
                                    </div>
                                    <div className="col-md-2">

                                    </div>
                                    <div className="col-md-2">

                                    </div>
                                    <div className="col-md-2">

                                    </div>
                                    <div className="col-md-2">
                                        <li className="categoryThreeOneLine">İdarəetmə hub</li>
                                        <li>Videokart</li>
                                        <li>Ana plata</li>
                                        <li>Operativ yaddaş</li>
                                        <li>Soyutma sistemləri</li>
                                        <li>Qida blokları</li>
                                        <li>Prosessorlar</li>
                                        <li>Sistem bloku üçün keyslər</li>
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
                                        <li className="categoryThreeOneLine"> Plitələr</li>
                                        <li>Sobalar</li>
                                        <li>Aspiratorlar</li>
                                        <li>qabyuyan maşınlar</li>
                                        <li>soyuducular</li>
                                        <li>dondurucular</li>
                                        <li>paltaryuyan maşınlar</li>
                                        <li>mikrodalğalı sobalar</li>
                                        <li>isirtmə siyirtmələri</li>
                                        <li>Qida tullantıları üçün üyüdücülər</li>
                                        <li>Dispenselər</li>
                                        <li>Siqar üçün piltələr</li>
                                        <li>Buz hazırlayan</li>
                                    </div>
                                    <div className="col-md-2">
                                        <li className="categoryThreeOneLine">İdarəetmə hub</li>
                                        <li>Blenderlər</li>
                                        <li>Ətçəkən maşınlar</li>
                                        <li>Çörək bişirən  maşınlar</li>
                                        <li>Mikserlər</li>
                                        <li>İzqara</li>
                                        <li>Multibişiricilər</li>
                                        <li>Buxarlı bişiricilər</li>
                                        <li>Tosterlər</li>
                                        <li>Dilimləyicilər</li>
                                        <li>Mətbəx tərəziləri</li>
                                        <li>Sendviç hazırlayan</li>
                                        <li>Blinçik hazırlayan</li>
                                        <li>Dondurma hazırlayan</li>
                                        <li>Doğrayıcı</li>
                                        <li>Aeorogril</li>
                                        <li>Mətbəx kombaynları</li>
                                        <li>İnduksiyalı plitələr</li>
                                        <li>Mini sobalar</li>
                                    </div>
                                    <div className="col-md-2">
                                        <li className="categoryThreeOneLine">Elektrikli çaydanlar</li>
                                        <li>İnduksiyon çaydanlar</li>
                                        <li>Sitrus press </li>
                                        <li>Şirəçəkənlər</li>
                                        <li>Qəhvə bişirənlər</li>
                                        <li>Termopotlar</li>
                                        <li>Damcılı qəhvədanlar</li>
                                        <li>Turka</li>
                                        <li>Qəhvə üyüdücülər</li>
                                        <li>Kapuçinatorlar</li>
                                        <li>Süd köpükləndiricilər</li>
                                        <li>Qəhvə kapsulu</li>
                                        <li>Qəhvə</li>
                                        <li>Qəhvə üçün siroplar</li>
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
                                        <li className="categoryThreeOneLine">İdarəetmə hub</li>
                                        <li>Kondisionerlər</li>
                                        <li>Ventilyatorlar</li>
                                        <li>Kombi sistemləri</li>
                                        <li>Havanəmləndiricilər</li>
                                        <li>Su qızdırıcıları</li>
                                        <li>Kaminlər</li>
                                        <li>Qidrometrlər</li>
                                        <li>Termometrlər</li>
                                        <li>Kaminlər</li>
                                        <li>Konvektorlar</li>
                                        <li>İnfraqırmızı qızdırıcılar</li>
                                        <li>İqlim kompleksləri</li>
                                        <li>Qızdırıcı ventilyatorlar</li>
                                        <li>Yağ qızdırıcılar</li>
                                        <li>Seksiyalı radiatorlar</li>
                                        <li>Panel radiatorlar</li>
                                        <li>Kombi üçün tənzimləyicilər</li>
                                        <li>Qaz reduktorları</li>
                                        <li>Seksiya kranları</li>
                                        <li>İsti döşəmə</li>
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