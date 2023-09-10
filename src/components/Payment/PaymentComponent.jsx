import React from 'react';
import styles from "../../styles/PaymentComponent.module.css";
import { Link } from 'react-router-dom';
import RezervationCardConfirm from '../RezervationCard/RezervationCardConfirm';

function PaymentComponent() {
    return (
        <section className={`${styles.styleOrderPageCommon}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div>
                            <h2 className={styles.OrderFormTitle}>Ödəniş</h2>
                            <div className={styles.contactStyleRezervation}>
                                <Link to="/order">
                                    <div className={styles.orderPageStyle}>
                                        <h4>Adres Məlumatları</h4>
                                    </div>
                                </Link>

                                <div className={styles.orderPageStylePayment}>
                                    <h4>Ödəmə Metodları</h4>
                                </div>

                                <div>
                                    <label className={styles.labelNameOrder}>Ödəmə Metodları:</label>
                                    <div>
                                        <div className="row">
                                            <div className="col-md-1">
                                                <input type="radio" className={styles.orderRadioBtn} name="OrderRadioBtn" />
                                            </div>
                                            <div className="col-md-3">
                                                <label className={styles.labelNameOrderPayment}>Qapıda ödə</label>
                                            </div>
                                            <div className="col-md-4">
                                            </div>

                                            <div className="col-md-1">
                                                <input type="radio" className={styles.orderRadioBtn} name="OrderRadioBtn" />
                                            </div>
                                            <div className="col-md-3">
                                                <label className={styles.labelNameOrderPayment}>Kart ilə ödə</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className={styles.paymentCard}>
                                                <div className={`${styles.paymentCardTitle} ${styles.labelNameOrderPayment}`}>
                                                    <h5 className={`text-center text-white mt-1`}>Cart Payment</h5>
                                                    <label className={`${styles.paymentCardInput} mt-5`}>Kart adı</label>
                                                    <input type="text" className={`form-control`} />
                                                    <label className={`${styles.paymentCardInput}`}>Kart nömrəsi</label>
                                                    <input type="number" className={`form-control`} />
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <label className={`${styles.paymentCardInput}`}>Kartın bitmə tarixi</label>
                                                            <label className={`${styles.paymentCardInput}`}>Ay</label>
                                                            <input placeholder="Ay" type="number" className={`form-control`} />
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label className={`${styles.paymentCardInputYears}`}>İl</label>
                                                            <input placeholder="il" type="number" className={`form-control`} />
                                                        </div>
                                                        <div className="col-md-4">
                                                           <label className={`${styles.paymentCardInputCvv}`}>Cvv </label>
                                                            <input placeholder="cvv" type="number" className={`form-control`} />
                                                        </div>
                                                    </div>
                                                    <label className={`${styles.paymentCardInput}`}>Məbləğ</label>
                                                    <input type="number" className={`form-control`} />

                                                    <button className={`btn  ${styles.rezervationCardConfirmationBtn}`}>Ödəməni tamamla</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <RezervationCardConfirm />
                    </div>
                </div>
            </div>
        </section>
    )
}


export default PaymentComponent;