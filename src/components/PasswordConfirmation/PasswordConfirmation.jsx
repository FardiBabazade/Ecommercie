import React from 'react'
import styles from './PasswordConfirmation.module.css';
import { Link } from "react-router-dom";

 function PasswordConfirmation() {
    return (
        <section className={styles.passwordrefreshpage}>
            <center>
          
                <div className={styles.passwordrefreshcard}>
                <p className={styles.passwordRefreshTitleInfo}>Şifrə yeniləmə e-postası eger gelmedise:</p>
               
               <ul >
                 <li className={styles.listyletype}>loeem ipsum egh lorem uodenid koge  lorem isubygyuge</li>
                 <li className={styles.listyletype}>loeem ipsum egh lorem uodenid koge  lorem isubygyuge</li>
                 <li className={styles.listyletype}>loeem ipsum egh lorem uodenid koge  lorem isubygyuge</li>
               </ul>


                    {/* <h6 className={styles.passwordRefreshTitleEmail} >E-Mail</h6> */}
                    <Link to="/passwordconfirm">
                        <button className={styles.passwordRefreshButton} >Giris Yap</button>
                    </Link>
                    <button className={styles.passwordRepeatSendButton} >Təkrar Göndər</button>
                    <Link to="/login">
                        <button className={`${styles.passwordRefreshPrevButton} `} >Əvvəlki Səhifəyə dön</button>
                    </Link>
                </div>
            </center>
        </section>
    )
}



export default PasswordConfirmation;