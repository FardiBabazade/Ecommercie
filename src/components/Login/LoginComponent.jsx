import React, { useState } from 'react'
import styles from "./LoginComponent.module.css";

function LoginComponent() {


    const [buttonCheck, setButtonCheck] = useState(false)


    const changeButton = () => {
        setButtonCheck(!buttonCheck)
    }

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
                                            onClick={changeButton}
                                            className={buttonCheck ?
                                                styles.signbtn:
                                               styles.loginbtn}>

                                            <span className={styles.signbtntext}>Login</span>
                                        </button>
                                        <button
                                                onClick={changeButton}
                                                className={buttonCheck ?
                                                styles.loginbtn :
                                                styles.signbtn}>
                                            <span className={styles.signbtntext}>Signup</span>
                                        </button>
                                        <input type="text" placeholder="Email Address" className={`${styles.inputsize} form-control `} />
                                        <input type="text" placeholder="Password" className={`${styles.inputsizetwo} form-control `} />
                                        <a className={styles.textforgot}>Forgot password?</a>
                                        <button className={styles.loginbutton}>Login</button>
                                        <span className={styles.loginbtnforgotpassword}> Not a member?    </span>
                                        <span className={styles.loginnotemember}>  Signup now</span>
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