import React from 'react'
import { Link } from "react-router-dom";
import styles from "../../styles/Signup.module.css";

 function Signup() {
    return (
        <div>
            <section className={styles.loginpage}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <center>
                            <div className={styles.logindiv}>
                                <h3 className={styles.logintitle}><b>REGISTRATION FORM</b></h3>
                                <div className="row">
                                    <div className="col-md-12">
                                    <Link to="/login">
                                        <button
                                            className={styles.loginbtn}>
                                            <span className={styles.signbtntext}>Login</span>
                                        </button>
                                        </Link>
                                            <button
                                                className={styles.signbtn}>
                                                <span className={styles.signbtntext}>Signup</span>
                                            </button>
                                            <input type="text" placeholder="Name" className={`${styles.inputsizename} form-control `} />
                                            <input type="text" placeholder="Surname" className={`${styles.inputsizesurname} form-control `} />
                                            <input type="text" placeholder="Email Address" className={`${styles.inputsizeemail} form-control `} />
                                        <input type="text" placeholder="Password" className={`${styles.inputsizepassword} form-control `} />
                                        <input type="text" placeholder="Repassword" className={`${styles.inputsizerepassword} form-control `} />
                                        <button className={styles.loginbutton}>Signup</button>
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