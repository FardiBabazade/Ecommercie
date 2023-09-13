import React from 'react'
import styles from "../../styles/UserInformationTable.module.css"
import Select from 'react-select'

function UserInformationTable() {



    let optionsDays = [];
    obj = {}

    for (var i = 0; i <= 31; i++) {
        var obj = {};
        obj['value'] = i;
        obj['label'] = i;
        optionsDays.push(obj);
    }

    let optionsMonths = [];
    obj = {}

    for (var i = 0; i <= 12; i++) {
        var obj = {};
        obj['value'] = i;
        obj['label'] = i;
        optionsMonths.push(obj);
    }
    let optionsYears = [];
    obj = {}

    for (var i = 1900; i <= 2023; i++) {
        var obj = {};
        obj['value'] = i;
        obj['label'] = i;
        optionsYears.push(obj);
    }


    return (
        <>
            <div className="col-md-12 col-sm-12 col-12">
                <div className={styles.titleInformationContent}>
                    <h3>İstifadəçi məlumatları</h3>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className={styles.userInfoLeftDiv}>
                            <h4>Məlumatlarım</h4>
                            <div className="row">
                                <div className="col-md-6">
                                    <label className="font-weight-bold mt-3">Ad</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <label className="font-weight-bold mt-3">Soyad</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-md-12">
                                    <label className="font-weight-bold mt-3">E-mail</label>
                                    <input type="email" className="form-control" />
                                </div>
                                <div className="col-md-12">
                                    <label className="font-weight-bold mt-3">Cib telefonu</label>
                                    <input type="tel" className="form-control" />
                                </div>
                                <div className="col-md-4">
                                    <label className="font-weight-bold mt-3">Gün</label>
                                    <Select options={optionsDays} />
                                </div>
                                <div className="col-md-4">
                                    <label className="font-weight-bold mt-3">Ay</label>
                                    <Select options={optionsMonths} />
                                </div>
                                <div className="col-md-4">
                                    <label className="font-weight-bold mt-3">İl</label>
                                    <Select options={optionsYears} />
                                </div>
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input name="genderInfopage" className={styles.radioInfoPage} type="radio" />
                                            <label className="font-weight-bold mt-5 ">Kişi</label>
                                        </div>
                                        <div className="col-md-6">
                                            <input name="genderInfopage" className={styles.radioInfoPage} type="radio" />
                                            <label className="font-weight-bold mt-5">Qadın</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <button className={styles.updateBtnUserInfo}>Yenilə</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={styles.userInfoRightDiv}>
                            <h4>Şifrə Yeniləmə </h4>
                            <label className="font-weight-bold mt-3">Cari şifrə</label>
                            <input type="text" className="form-control" />

                            <label className="font-weight-bold mt-3">Yeni şifrə</label>
                            <input type="text" className="form-control" />

                            <label className="font-weight-bold mt-3">Yeni şifrə təkrar</label>
                            <input type="text" className="form-control" />
                            <button className={styles.updateBtnUserInfo}>Yenilə</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UserInformationTable;