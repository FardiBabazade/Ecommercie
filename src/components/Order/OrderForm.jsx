import React from 'react'
import { Link } from 'react-router-dom';
import Select from 'react-select'
import styles from "../../styles/OrderForm.module.css";
import RezervationCardConfirm from '../RezervationCard/RezervationCardConfirm';

function OrderForm() {

    const options = [
        { value: 'Bakı', label: 'Bakı' },
        { value: 'Xəzər', label: 'Xəzər' },
        { value: 'Mərdəkan', label: 'Mərdəkan' }
    ]

    return (
        <section className={`${styles.styleOrderPageCommon}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div>
                            <h2 className={styles.OrderFormTitle}>Sifariş</h2>
                            <div className={styles.contactStyleRezervation}>
                                    <div className={styles.orderPageStyle}>
                                        <h4>Adres Məlumatları</h4>
                                    </div>
                                <Link to="/payment">
                                    <div className={styles.orderPageStylePayment}>
                                        <h4>Ödəmə Metodları</h4>
                                    </div>
                                </Link>
                                <div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label className={styles.labelNameOrder}>Adınız:</label>
                                            <input placeholder="Adınız" type="text" className={`form-control`} />
                                            <label className={styles.labelNameOrder}>Ata Adı:</label>
                                            <input placeholder="Adınız" type="text" className={`form-control`} />
                                            <label className={styles.labelNameOrder}>Şəhər/rayon:</label>
                                            <Select options={options} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className={styles.labelNameOrder}>Soyadınız:</label>
                                            <input placeholder="Adınız" type="text" className={`form-control`} />
                                            <label className={styles.labelNameOrder}>Telefon Nömrəniz:</label>
                                            <input placeholder="Adınız" type="tel" className={`form-control`} />
                                            <label className={styles.labelNameOrder}>Ünvan:</label>
                                            <input placeholder="Adınız" type="text" className={`form-control`} />
                                        </div>
                                        <div className="col-md-12">
                                            <label className={styles.labelNameOrder}>Kuryer üçün qeyd:</label>
                                            <textarea className={`${styles.textareaOrder} form-control`} />

                                           

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



export default OrderForm;