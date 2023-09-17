import React,{useState} from 'react';
import styles from "../../styles/UserInfoList.module.css";
import { Link } from 'react-router-dom';

function UserInfoMainComponent() {

    return (
        <>
            <div className={`${styles.InfoUserCard} ${styles.InfoUserCardThree}`} id="list-tab" role="tablist">
                <div className={styles.mainCardParentDivThree}>
                    <p className={styles.mainCardTitleAccount}>gfgffgf@gmail.com</p>
                </div>
            </div>
            <div className={`${styles.InfoUserCard} ${styles.InfoUserCardOne}`} id="list-tab" role="tablist">
                <div className={styles.mainCardParentDiv}>
                    <p className={styles.mainCardTitleAccount}>Sifarişlərim</p>
                </div>
                <Link to="/userinfo/orders">
                    <li className={styles.listgroupitem}>
                        <a>Bütün sifarişlərim</a>
                    </li>
                </Link>
                <Link to="/userinfo/rating">
                    <li className={styles.listgroupitem}>
                        <a>Dəyərləndirmələrim</a>
                    </li>
                </Link>
                <li className={`${styles.listgroupitemLast} ${styles.listgroupitem} `}>
                    <a>Satıcı mesajlarım</a>
                </li>
            </div>
            <div className={`${styles.InfoUserCard} ${styles.InfoUserCardTwo}`} id="list-tab" role="tablist">
                <div className={styles.mainCardParentDiv}>
                    <p className={styles.mainCardTitleAccount}>Hesabım & Dəstək</p>
                </div>
                <Link to="/userinfo/info">
                    <li 
                        className={styles.listgroupitem}>
                        <a>İstifadəçi məlumatlarım</a>
                    </li>
                </Link>
                <Link to="/userinfo/address" >
                    <li  className={styles.listgroupitem}>
                        <a>Adres məlumatlarım</a>
                    </li>
                </Link>
                <Link to="/userinfo/payment">
                    <li  className={styles.listgroupitem}>
                        <a>Ödəmə metodlarım</a>
                    </li>
                </Link >
                <li  className={`${styles.listgroupitemLast} ${styles.listgroupitem} `}>
                    <a>Dəstək</a>
                </li>
            </div>
        </>
    )
}

export default UserInfoMainComponent;