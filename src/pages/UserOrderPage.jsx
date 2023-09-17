import React from 'react'
import Layout from '../main/Layout';
import UserOrders from '../components/UsersOrders/UserOrder.jsx';
import stylestwo from "../styles/UserInfoList.module.css"
import UserInfoMainComponent from '../components/UserInfoList/UserInfoMainComponent';

function UserOrderPage() {
    return (
        <Layout>
            <section className={stylestwo.userOrdersPage}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <UserInfoMainComponent />
                        </div>
                        <div className="col-md-9">
                            <UserOrders />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default UserOrderPage;