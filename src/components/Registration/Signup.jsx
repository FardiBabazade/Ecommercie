import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import styles from "../../styles/Signup.module.css";
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/reducers/authSlice.js';
import i18n from '../../i18n';

const initialValues = {
    name: '',
    surname: '',
    username:'',
    email: '',
    password: '',
    repassword: ''
}
const signupvalidations = Yup.object({
    name: Yup.string().min(4).max(25).required("Please Enter name"),
    surname: Yup.string().min(4).max(25).required("Please Enter surname"),
    username: Yup.string().min(4).max(25).required("Please Enter username"),
    email: Yup.string().email("Please Enter valid  email").required("Please Enter Email"),
    password: Yup.string().min(5).required("Please Enter Password"),
    repassword: Yup.string().oneOf([Yup.ref("password")], "Password not match")
})
function Signup() {
    
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({});

    const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
        initialValues: initialValues,
        validationSchema: signupvalidations,
        onSubmit: (values) => {
            postSignupData(values)
        }
    })

    const postSignupData = ({name,surname,email,username,password,repassword}) => {

        const sendSignupDataStore = {
            name: name,
            surname: surname,
            email: email,
            username:username
          };

        axios.post('/signup', {
            name:name,
            surname:surname,
            email:email,
            // password: values.password,
            // repassword: values.repassword
        })
            .then((response) => {
                console.log(response);
                toast("Qeydiyyat Uğurla tamamlandı");
            }, (error) => {
                toast("Qeydiyyat baş vermədi");
                navigate("/login");
                dispatch(login(sendSignupDataStore));
                console.log(error);
            });
        
    };


    return (
        <div>
            <ToastContainer />
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
                                            <form
                                                onSubmit={handleSubmit}
                                            >
                                                <input
                                                    type="text"
                                                    placeholder={t('Name')}
                                                    name="name"
                                                    value={values.name}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    className={`${styles.inputsizename} form-control `} />
                                                {errors.name && <small className={styles.errorShowSignup}>{errors.name}</small>}
                                                <input
                                                    type="text"
                                                    placeholder={t('Surname')}
                                                    name="surname"
                                                    value={values.surname}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    className={`${styles.inputsizesurname} form-control `} />
                                                {errors.surname && <small className={styles.errorShowSignup}>{errors.surname}</small>}

                                                <input
                                                    type="text"
                                                    placeholder={t('Username')}
                                                    name="username"
                                                    value={values.username}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    className={`${styles.inputsizesurname} form-control `} />
                                                {errors.username && <small className={styles.errorShowSignup}>{errors.username}</small>}


                                                <input
                                                    type="text"
                                                    placeholder={t('Email Address')}
                                                    value={values.email}
                                                    name="email"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    className={`${styles.inputsizeemail} form-control `} />
                                                {errors.email && <small className={styles.errorShowSignup}>{errors.email}</small>}
                                                <input
                                                    type="text"
                                                    placeholder={t('Password')}
                                                    value={values.password}
                                                    name="password"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    className={`${styles.inputsizepassword} form-control `} />
                                                {errors.password && <small className={styles.errorShowSignup}>{errors.password}</small>}
                                                <input
                                                    type="text"
                                                    placeholder={t('Repassword')}
                                                    value={values.repassword}
                                                    name="repassword"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    className={`${styles.inputsizerepassword} form-control `} />
                                                {errors.repassword && <small className={styles.errorShowSignup}>{errors.repassword}</small>}

                                                <button
                                                    className={styles.loginbutton}>{t('Signup')}
                                                </button>
                                            </form>
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