import React from 'react'
import Layout from '../main/Layout';
import PaymentMethods from '../components/PaymentMethods/PaymentMethods';
import stylestwo from "../styles/UserInfoList.module.css"
import UserInfoMainComponent from '../components/UserInfoList/UserInfoMainComponent';

function PaymentMethodspage() {
    return (
        <Layout>
            <section className={stylestwo.userInfoPage}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <UserInfoMainComponent />
                        </div>
                        <div className="col-md-9">
                            <PaymentMethods />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default PaymentMethodspage;