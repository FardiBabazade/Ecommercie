import React from 'react'
import Layout from "../main/Layout.jsx"
import stylesthree from "../styles/Ratingpage.module.css"
import Rating from '../components/RatingFolder/Rating';
import UserInfoMainComponent from '../components/UserInfoList/UserInfoMainComponent.jsx';


function Product() {
    return (
        <Layout>
            <section className={stylesthree.userInfoPage}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <UserInfoMainComponent />
                        </div>
                        <div className="col-md-9">
                           <Rating/>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}


export default Product;