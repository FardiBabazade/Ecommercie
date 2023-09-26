import React from 'react'
import { Link } from "react-router-dom";
import styles from "../../styles/Signup.module.css";
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

 function Signup() {
    const { t, i18n } = useTranslation();
    return (
        <div>
            <section className={styles.loginpage}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <center>
                            <div className={styles.logindiv}>
                                <h3 className={styles.logintitle}><b>{t('REGISTRATION FORM')}</b></h3>
                                <div className="row">
                                    <div className="col-md-12">
                                    <Link to="/login">
                                        <button
                                            className={styles.loginbtn}>
                                            <span className={styles.signbtntext}>{t('Login')}</span>
                                        </button>
                                        </Link>
                                            <button
                                                className={styles.signbtn}>
                                                <span className={styles.signbtntext}>{t('Signup')}</span>
                                            </button>
                                            <input type="text" placeholder={t('Name')} className={`${styles.inputsizename} form-control `} />
                                            <input type="text" placeholder={t('Surname')} className={`${styles.inputsizesurname} form-control `} />
                                            <input type="text" placeholder={t('Email Address')} className={`${styles.inputsizeemail} form-control `} />
                                        <input type="text" placeholder={t('Password')} className={`${styles.inputsizepassword} form-control `} />
                                        <input type="text" placeholder={t('Repassword')} className={`${styles.inputsizerepassword} form-control `} />
                                        <button className={styles.loginbutton}>{t('Signup')}</button>
                                    </div>
                                </div>
                            </div>
                        </center>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}
export default Signup;