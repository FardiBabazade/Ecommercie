import React from 'react'
import styles from "../../styles/PaymentMethods.module.css";

function PaymentMethods() {
    return (
        <div className={styles.paymentMethodsCard}>
            <h5 className={styles.paymentMethodsCardTitleOne}>Ödəmə methodunun adı</h5>
            <h5 className={styles.paymentMethodsCardTitleTwo}>Dəyişdir</h5>
            <span>4166 6666 6666 6666</span>
            <span className='ml-3'>10/25</span>
        </div>
    )
}


export default PaymentMethods;