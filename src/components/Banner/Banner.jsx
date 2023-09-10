import React from 'react'
import styles from "../../styles/Banner.module.css";
import imageone from "../../assets/images/shop1.webp"
import imagetwo from "../../assets/images/shop2.webp"

function Banner() {
    return (
        <section className={styles.bannerdiv}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <img className={styles.imgclass} src={imageone} />
                    </div>
                    <div className="col-md-4">
                        <span className={styles.timediv}>
                            <center>
                                <span className={styles.timedivpnumber}>02</span>
                                <p className={styles.timedivp}>DAYS</p>
                            </center>

                        </span>
                        <span className={styles.timediv}>
                            <center>
                                <span className={styles.timedivpnumber}>10</span>
                                <p className={styles.timedivp}>HOURS</p>
                            </center>
                        </span>
                        <span className={styles.timediv}>
                            <center>
                                <span className={styles.timedivpnumber}>34</span>
                                <p className={styles.timedivp}>MINS</p>
                            </center>
                        </span>
                        <span className={styles.timediv}>
                            <center>
                                <span className={styles.timedivpnumber}>60</span>
                                <p className={styles.timedivp}>SECS</p>
                            </center>
                        </span>
                        <h3 className={styles.bannertitle}>HƏFTƏNİNƏN İSTİ TƏKLİFLƏRİ</h3>
                        <button className={styles.bannerbtn}>SATIŞA BAŞLA</button>
                    </div>
                    <div className="col-md-4">
                        <img className={styles.imgclass} src={imagetwo} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;
