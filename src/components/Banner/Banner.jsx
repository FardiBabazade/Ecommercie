import React from 'react'
import styles from "../../styles/Banner.module.css";
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

function Banner() {


    const { t, i18n } = useTranslation();
    return (
        
        <section  className={styles.bannerdiv}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">

                    </div>
                    <div className="col-md-4">
                        <center>
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
                        </center>
                        <div className="row">
                            <div className="col-md-12">
                                <center>
                                    <h3 className={styles.bannertitle}>{t('HOT OFFERS OF THE WEEK')}</h3>
                                    <button className={styles.bannerbtn}>{t('START SELLING')}</button>
                                </center>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;
