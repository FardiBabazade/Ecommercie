import React from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';

import styles from "../../styles/LoginComponent.module.css";
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

function LoginComponent() {
    const { t, i18n } = useTranslation();

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    

    const currentUser = useSelector(state => state)
    console.log('currentUser', currentUser.auth.user)
    console.log('currentIsAuthenticion', currentUser.auth.isAuthenticated)

    const formik = useFormik({

        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().min(8).max(25).required('Kullanıcı adı zorunludur.'),
            password: Yup.string().min(8).max(25).required('Şifre zorunludur.'),
        }),
        onSubmit: (values) => {
            // Redux eylemini çağırarak giriş yapma işlemi
            toast("Login uğurla tamamlandı");

            axios.post('/login', {
                name: values.username,
                password: values.password,
            })
                .then((response) => {
                    console.log(response);
                    toast("Qeydiyyat Uğurla tamamlandı");
                }, (error) => {
                    toast("Qeydiyyat baş vermədi");
                    navigate("/login");
                    // dispatch(login(values));
                    console.log(error);
                });
            //   dispatch(login(values));
        },
    });

    return (
        <section className={styles.loginpage}>
            <ToastContainer />
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
                                        <form onSubmit={formik.handleSubmit}>

                                            <input
                                                type="text"
                                                placeholder={t('EMAIL ADDRESS')}
                                                name="username"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.username}
                                                className={`${styles.inputsize} form-control `} />

                                            {formik.touched.username && formik.errors.username ? (
                                                <div>
                                                    <small className={styles.errorShowSignup}>
                                                        {formik.errors.username}</small>
                                                </div>
                                            ) : null}
                                            <input
                                                type="text"
                                                placeholder={t('Password')}
                                                name="password"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.password}
                                                className={`${styles.inputsizetwo} form-control `} />

                                            {formik.touched.password && formik.errors.password ? (
                                                <div>
                                                    <small className={styles.errorShowSignup}>{formik.errors.password}</small>
                                                </div>
                                            ) : null}


                                            <Link to="/passwordrefresh">
                                                <a className={styles.textforgot}>{t('Forgot password')}</a>
                                            </Link>
                                            <button className={styles.loginbutton}>{t('Login')}</button>

                                        </form>


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