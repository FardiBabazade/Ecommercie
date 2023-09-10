import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../../styles/RezervationCardConfirm.module.css";

function RezervationCardConfirm() {
    return (
        <section>
            <div className={styles.rezervationCard}>
                <h4 className={styles.rezervationCardTitle}>Yekun sifariş məlumatı</h4>
                <p className={`text-left font-weight-bold mt-5`}>Məhsulun cəmi qiyməti:</p>
                <p className={`text-left font-weight-bold`}>Endirim:</p>
                <input placeholder="Endirim kodunu daxil edin" className={`form-control ${styles.rezervationCardPromoInput}`} type="text" />
                <Link to="/order">
                    <button className={`btn  ${styles.rezervationCardConfirmationBtn}`}>Səbəti təsdiq et</button>
                </Link>
            </div>
        </section>
    )
}


export default RezervationCardConfirm;