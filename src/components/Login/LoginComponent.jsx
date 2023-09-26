import React from 'react'
import { Link } from "react-router-dom";
import styles from "../../styles/LoginComponent.module.css";
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

function LoginComponent() {
    const { t, i18n } = useTranslation();

    return (
        <section className={styles.loginpage}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <center>
                            <div className={styles.logindiv}>
                                <h3 className={styles.logintitle}><b>{t('LOGIN FORM')}</b></h3>
                                <div className="row">
                                    <div className="col-md-12">
                                        <button
                                            className={styles.loginbtn}>
                                            <span className={styles.signbtntext}>{t('Login')}</span>
                                        </button>
                                        <Link to="/registration">
                                            <button
                                                className={styles.signbtn}>
                                                <span className={styles.signbtntext}>{t('Signup')}</span>
                                            </button>
                                        </Link>
                                        <input type="text" placeholder={t('EMAIL ADDRESS')} className={`${styles.inputsize} form-control `} />
                                        <input type="text" placeholder={t('Password')} className={`${styles.inputsizetwo} form-control `} />
                                        <Link to="/passwordrefresh">
                                            <a className={styles.textforgot}>{t('Forgot password')}</a>
                                        </Link>


                                        <button className={styles.loginbutton}>{t('Login')}</button>
                                        <span className={styles.loginbtnforgotpassword}> {t('Not a member')}  </span>
                                        <Link to="/registration">
                                            <span className={styles.loginnotemember}>{t('Signup now')}</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </center>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginComponent;