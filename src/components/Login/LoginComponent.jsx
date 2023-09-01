import React from 'react'
import { Link } from "react-router-dom";
import styles from "./LoginComponent.module.css";

function LoginComponent() {
    return (
        <section className={styles.loginpage}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <center>
                            <div className={styles.logindiv}>
                                <h3 className={styles.logintitle}><b>LOGIN FORM</b></h3>
                                <div className="row">
                                    <div className="col-md-12">
                                        <button
                                            className={styles.loginbtn}>
                                            <span className={styles.signbtntext}>Login</span>
                                        </button>
                                        <Link to="/registration">
                                            <button
                                                className={styles.signbtn}>
                                                <span className={styles.signbtntext}>Signup</span>
                                            </button>
                                        </Link>
                                        <input type="text" placeholder="Email Address" className={`${styles.inputsize} form-control `} />
                                        <input type="text" placeholder="Password" className={`${styles.inputsizetwo} form-control `} />
                                        <Link to="/passwordrefresh">
                                            <a className={styles.textforgot}>Forgot password?</a>
                                        </Link>


                                        <button className={styles.loginbutton}>Login</button>
                                        <span className={styles.loginbtnforgotpassword}> Not a member?    </span>
                                        <Link to="/registration">
                                            <span className={styles.loginnotemember}>  Signup now</span>
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