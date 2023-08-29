import React from 'react'
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx"

function Layout(props) {
    return (
        <div>
            <Header />
            <div className="content">
                {props.children}
            </div>
            <Footer />
        </div>
    )
}


export default Layout;