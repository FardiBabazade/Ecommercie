import React from 'react'
import UserInfoMainComponent from '../components/UserInfoList/UserInfoMainComponent.jsx';
import UserInformationTable from '../components/UserInformationTable/UserInformationTable.jsx';
import Layout from '../main/Layout';

import stylestwo from "../styles/UserInfoList.module.css"

function UserInfoInformation() {
    return (
        <Layout>
            <section className={stylestwo.userInfoPage}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <UserInfoMainComponent />
                        </div>
                        <div className="col-md-9">
                            <UserInformationTable />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default UserInfoInformation;