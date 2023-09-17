import React from 'react'
import Select from 'react-select'
import styles from "../../styles/UserAddress.module.css";


function UserAddressComponent() {

    const optionsVillages = [
        { value: 'Maszir', label: 'Masazir' },
        { value: 'Razin', label: 'Razin' },
        { value: 'Xirdaslan', label: 'Xirdalan' }
    ]

    const optionsTownship = [
        { value: 'Maszir', label: 'Masazir' },
        { value: 'Razin', label: 'Razin' },
        { value: 'Xirdaslan', label: 'Xirdalan' }
    ]


  const confirmDeleteAddress=()=>{
        
        let confirmAction = window.confirm("Silmek İstədiyinizdən əminsiniz???");
        if (confirmAction) {
          alert("Uğurla silindi");
        } else {
          alert("Silinmə işi baş vermədi");
        }
  }


    return (
        <React.Fragment>
            <div>
                <div className={styles.titleInformationContent}>
                    <h3>Address melumatlari</h3>
                    <button data-toggle="modal" data-target="#exampleModal">
                        <span className={styles.titleInformationContentSpanAdd}  >yeni adres əlavə et</span>
                        <span className={styles.titleInformationContentSpanPlus}>+</span>
                    </button>
                </div>
                <div className={styles.addressRightDiv}>
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
                                    <span onClick={confirmDeleteAddress} className={styles.cardFooterAddressDeleteIcon}><i className="fa fa-trash"></i><span>Sil</span></span>
                                </div>
                                <div className="col-md-6">
                                    <button data-toggle="modal" data-target="#exampleModal2" className={styles.cardFooterAddressUpdateButton}>Addresi dəyişdir</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Modal ADD --> */}
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Address Melumatlari Elave et</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <label className="font-weight-bold mt-3">Ad</label>
                                        <input type="text" className="form-control" />
                                        <label className="font-weight-bold mt-3">Telefon</label>
                                        <input type="tel" className="form-control" />
                                        <label className="font-weight-bold mt-3">Qəsəbə</label>
                                        <Select options={optionsTownship} />
                                    </div>
                                    <div className='col-md-6'>
                                        <label className="font-weight-bold mt-3">Soyad</label>
                                        <input type="text" className="form-control" />

                                        <label className="font-weight-bold mt-3">Rayon</label>
                                        <Select options={optionsVillages} />
                                    </div>
                                    <div className="col-md-12">
                                        <label className="font-weight-bold mt-3">Ünvan</label>
                                        <textarea className={`${styles.textareAddress} form-control`}></textarea>
                                        <button className={`${styles.saveBtnAddressForm}`}>Yadda saxla</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Modal END --> */}
                {/* <!-- Modal UPDATE --> */}
                <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Address Melumatlari Güncəllə</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <label className="font-weight-bold mt-3">Ad</label>
                                        <input type="text" className="form-control" />
                                        <label className="font-weight-bold mt-3">Telefon</label>
                                        <input type="tel" className="form-control" />

                                        <label className="font-weight-bold mt-3">Qəsəbə</label>
                                        <Select options={optionsTownship} />
                                    </div>
                                    <div className='col-md-6'>
                                        <label className="font-weight-bold mt-3">Soyad</label>
                                        <input type="text" className="form-control" />

                                        <label className="font-weight-bold mt-3">Rayon</label>
                                        <Select options={optionsVillages} />
                                    </div>
                                    <div className="col-md-12">
                                        <label className="font-weight-bold mt-3">Ünvan</label>
                                        <textarea className={`${styles.textareAddress} form-control`}></textarea>
                                        <button className={`${styles.saveBtnAddressForm}`}>Yadda saxla</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Modal UPDATE END --> */}
            </div>
        </React.Fragment>
    )
}
export default UserAddressComponent;