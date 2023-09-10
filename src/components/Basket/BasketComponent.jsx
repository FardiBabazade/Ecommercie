import React from 'react'
import styles from "../../styles/BasketComponent.module.css";
import deleteIcon from "../../assets/icons/trash.png";
import deleteIconTwo from "../../assets/icons/trash2.png";
import imagethree from "../../assets/images/shop3.webp"
import Counter from "../Counter/Counter.jsx";
import RezervationCardConfirm from '../RezervationCard/RezervationCardConfirm.jsx';

function BasketComponent() {

    return (
        <section className={styles.backStyleBasket}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <center>
                            <div className={`${styles.basketTitleProductCount} ${styles.basketTitleProductSize}`}>
                                <div className="row">
                                    <div className="col-md-3">
                                        <h4 className="text-center mt-3">Səbət (1 məhsul)</h4>
                                    </div>
                                    <div className="col-md-9">

                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.basketTitleProductCount} ${styles.basketTitleProductSizeTwo}`}>
                                <div className="row">
                                    <div className="col-md-4">
                                        <center>
                                            <button className={`btn btn-secondary ${styles.customBtnBasket}`}>Hamısını seç</button>
                                            <button className={`btn btn-secondary ${styles.customBtnBasket} ${styles.customBtnBasketDelete} `}><img className={styles.deleteIconSize} src={deleteIcon} /> Seçilənləri sil</button>
                                        </center>
                                    </div>
                                    <div className="col-md-8">

                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.basketTitleProductCount} ${styles.basketProductSizeHeight}`}>
                                <div className="row">
                                    <div className="col-md-1">
                                        <center>
                                            <input className={styles.checkboxSize} type="checkbox" />
                                        </center>
                                    </div>
                                    <div className="col-md-1">
                                        <img className={styles.basketProductSizeImg} src={imagethree} />
                                    </div>
                                    <div className="col-md-2">
                                        <p className={styles.basketProductTitle}>HP Komputer</p>
                                        <p className={`${styles.basketProductTitleTwo} ${styles.basketProductTitle}`}>Göstəriciləri</p>
                                    </div>
                                    <div className="col-md-3">

                                    </div>
                                    <div className="col-md-2">
                                        <Counter />
                                    </div>
                                    <div className="col-md-2">
                                        <span className={styles.basketProductPrice}>100$</span>
                                    </div>
                                    <div className="col-md-1">
                                        <img className={styles.basketProductSizeIcon} src={deleteIconTwo} />
                                    </div>
                                </div>

                            </div>
                            <div className={`${styles.basketTitleProductCount} ${styles.basketProductSizeHeight}`}>
                                <div className="row">
                                    <div className="col-md-1">
                                        <center>
                                            <input className={styles.checkboxSize} type="checkbox" />
                                        </center>
                                    </div>
                                    <div className="col-md-1">
                                        <img className={styles.basketProductSizeImg} src={imagethree} />
                                    </div>
                                    <div className="col-md-2">
                                        <p className={styles.basketProductTitle}>HP Komputer</p>
                                        <p className={`${styles.basketProductTitleTwo} ${styles.basketProductTitle}`}>Göstəriciləri</p>
                                    </div>
                                    <div className="col-md-3">

                                    </div>
                                    <div className="col-md-2">
                                        <Counter />
                                    </div>
                                    <div className="col-md-2">
                                        <span className={styles.basketProductPrice}>100$</span>
                                    </div>
                                    <div className="col-md-1">
                                        <img className={styles.basketProductSizeIcon} src={deleteIconTwo} />
                                    </div>
                                </div>

                            </div>
                        </center>
                    </div>
                    <div className="col-md-4">
                        <center>
                            <RezervationCardConfirm />
                        </center>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BasketComponent;