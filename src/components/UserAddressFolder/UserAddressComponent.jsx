import React from 'react'
import styles from "../../styles/UserAddress.module.css";

function UserAddressComponent() {
    return (
        <div className="col-md-9">
                  {/* <div className={styles.titleInformationContent}>
                    <h3>İstifadəçi məlumatları</h3>
                </div> */}
            <div className={styles.cardAddressPage}>
          
                <div className={styles.cardheader}>
                    <h6 className="card-title mb-2 ">Expargo</h6>
                </div>
                <div className="card-body">
                    <p className="font-weight-bold mt-3">Adınız:</p>
                    <p className="font-weight-bold mt-3">Soyadınız:</p>
                    <p className="font-weight-bold mt-3">Ünvanınız:</p>
                    <p className="font-weight-bold mt-3">TelNömrəniz:</p>
                </div>
                <div className={`card-footer ${styles.cardFooter}`}>
                    <div className="row">
                        <div className="col-md-6">
                            <span className={styles.cardFooterAddressDeleteIcon}><i className="fa fa-trash"></i><span>Sil</span></span>
                        </div>
                        <div className="col-md-6">
                            <button className={styles.cardFooterAddressUpdateButton}>Addresi dəyişdir</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserAddressComponent;