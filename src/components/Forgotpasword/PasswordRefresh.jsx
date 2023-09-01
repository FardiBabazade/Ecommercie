import React, { useState } from 'react'
import styles from './PasswordRefresh.module.css';
import { Link } from "react-router-dom";

function PasswordRefresh() {

    const [checkEmailAccept, setCheckEmailAccept] = useState(false)

    return (
        <section className={styles.passwordrefreshpage}>
            <center>
                <h3 className={styles.passwordRefreshTitle}>Şifrə Yeniləmə</h3>
                <p className={styles.passwordRefreshTitleInfo}>Şifrə yeniləmə bağlantısını göndərəbilmemiz için e-posta adresinize ihtiyacımız var.</p>
                <div className={styles.passwordrefreshcard}>
                    <h6 className={styles.passwordRefreshTitleEmail} >E-Mail</h6>
                    <input type="email" className={`${styles.passwordRefreshInput} form-control`} />
                    <Link to="/passwordconfirm">
                        <button className={styles.passwordRefreshButton} >Şifrəmi Yenilə</button>
                    </Link>
                    <Link to="/login">
                        <button className={`${styles.passwordRefreshPrevButton} `} >Əvvəlki Səhifəyə dön</button>
                    </Link>
                </div>
            </center>
        </section>


    )
}

export default PasswordRefresh;