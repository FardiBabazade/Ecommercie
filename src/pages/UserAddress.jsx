import React from 'react'
import UserAddressComponent from '../components/UserAddressFolder/UserAddressComponent.jsx';
import UserInfoMainComponent from '../components/UserInfoList/UserInfoMainComponent.jsx';
import Layout from '../main/Layout';
import stylestwo from "../styles/UserInfoList.module.css"

function UserAddress() {
    return (
        <Layout>
            <section className={stylestwo.userInfoPage}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <UserInfoMainComponent />
                        </div>
                        <div className="col-md-9">
                            <UserAddressComponent />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default UserAddress;