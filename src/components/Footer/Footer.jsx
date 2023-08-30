import React from 'react'
import styles from "./Footer.module.css";

function Footer() {
    return (
        <section className={styles.footersize}>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h4 className={styles.footertitle}>ABOUT US</h4>
                            <p className={styles.footerptitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
                            <p className={styles.footerp}>Laptops</p>
                            <p className={styles.footerp}>Smartphones</p>
                            <p className={styles.footerp}>Cameras</p>
                        </div>
                        <div className="col-md-3">
                            <h4 className={styles.footertitle}>CATEGORIES</h4>
                            <p className={styles.footerp}>Hot Deals</p>
                            <p className={styles.footerp}>Laptops</p>
                            <p className={styles.footerp}>Smartphones</p>
                            <p className={styles.footerp}>Cameras</p>
                            <p className={styles.footerp}>Accesories</p>
                        </div>
                        <div className="col-md-3">
                            <h4 className={styles.footertitle}>INFORMATION</h4>
                            <p className={styles.footerp}>Hot Deals</p>
                            <p className={styles.footerp}>Laptops</p>
                            <p className={styles.footerp}>Smartphones</p>
                            <p className={styles.footerp}>Cameras</p>
                            <p className={styles.footerp}>Accesories</p>
                        </div>
                        <div className="col-md-3">
                            <h4 className={styles.footertitle}>SERVICES</h4>
                            <p className={styles.footerp}>Hot Deals</p>
                            <p className={styles.footerp}>Laptops</p>
                            <p className={styles.footerp}>Smartphones</p>
                            <p className={styles.footerp}>Cameras</p>
                            <p className={styles.footerp}>Accesories</p>
                        </div>
                    </div>
                </div>
            </footer>
        </section>

    )
}


export default Footer;