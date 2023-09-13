import React from 'react';
import styles from "../../styles/UserInfoList.module.css";
import { Link } from 'react-router-dom';

function UserInfoMainComponent() {
    return (
        <div className={styles.InfoUserCard} id="list-tab" role="tablist">
            <div className={styles.mainCardParentDiv}>
                <p className={styles.mainCardTitleAccount}>Hesabım</p>
            </div>
            <Link to="/userinfo/info">
                <li className={styles.listgroupitem}>
                    <i className="fa fa-info-circle"></i><a>İstifadəçi məlumatı</a>
                </li>
            </Link>
            <Link to="/userinfo/address">
                <li className={styles.listgroupitem}>
                    <i className="fa fa-address-card-o"></i><a>Adres məlumatı</a>
                </li>
            </Link>
            <li className={styles.listgroupitem}>
                <i className="fa fa-cc-visa"></i><a>Ödəmə metodları</a>
            </li>
            <li className={ styles.listgroupitem }>
                <i className="fa fa-first-order"></i><a>Dəstək</a>
            </li>
        </div>
    )
}

export default UserInfoMainComponent;