import React from 'react'
import stylesOrders from "../../styles/UserInformationTable.module.css"
import Select from 'react-select';
import imageone from "../../assets/images/shop1.webp"
import imagetwo from "../../assets/images/shop2.webp"

function UserOrder() {

    const optionsOrdersTime = [
        { value: 'Bütün sifarişlər', label: 'Bütün sifarişlər' },
        { value: 'Son 1 ay', label: 'Son 1 ay' },
        { value: 'Son 2 ay', label: 'Son 2 ay' }
    ]

    return (
        <div>
            <div className={stylesOrders.titleInformationContent}>
                <div className='container-fluid'>
                    <div className="row">
                        <div className='col-md-3'>
                            <h3>Sifarişlərim</h3>
                        </div>
                        <div className='col-md-5'>
                            <center>
                                <input className={`${stylesOrders.inputSearchOrders} form-control`} type="text" />
                            </center>
                        </div>
                        <div className="col-md-4">
                            <Select options={optionsOrdersTime} />
                        </div >
                    </div>
                </div>
            </div>
            <div className={stylesOrders.ordersContentDiv}>
                <div className={stylesOrders.ordersContentDivTop}>
                    <div className="row">
                        <div className="col-md-3">
                            <center>
                                <h6 className="font-weight-bold">Sifariş tarixi</h6>
                                <p className={stylesOrders.ordersContentDivTopPTag}>16 sentyabr 15:00 2023 </p>
                            </center>
                        </div>
                        <div className="col-md-3">
                            <center>
                                <h6 className="font-weight-bold">Sifariş məzmunu</h6>
                                <p  className={stylesOrders.ordersContentDivTopPTag}>2 təhvil,2 məzmun</p>
                            </center>
                        </div>
                        <div className="col-md-3">
                            <center>
                                <h6 className="font-weight-bold">Alıcı</h6>
                                <p  className={stylesOrders.ordersContentDivTopPTag}>Anar Əhmpdov</p>
                            </center>
                        </div>
                        <div className="col-md-3">
                            <center>
                                <h6 className="font-weight-bold">Cəm</h6>
                                <p  className={stylesOrders.ordersContentDivTopPTag}>220 man</p>
                            </center>
                        </div>
                    </div>
                </div>
                <div className={stylesOrders.ordersContentDivBlocks}>
                    <div className="row">
                          <div className="col-md-6">
                               <h5 className='mt-4'> <i class="fa fa-check"></i> Təhvil verildi</h5>
                               <h6 className='mt-0'>1 fevral tarixində təhvil verildi</h6>
                          </div>
                          <div className="col-md-6">
                              <img className={stylesOrders.imgOrdersProduct} src={imageone} />
                          </div>
                    </div>
                </div>
                <div className={stylesOrders.ordersContentDivBlocks}>
                    <div className="row">
                          <div className="col-md-6">
                               <h5 className='mt-4'> <i class="fa fa-check"></i>  Təhvil verildi</h5>
                               <h6 className='mt-0'>1 fevral tarixində təhvil verildi</h6>
                          </div>
                          <div className="col-md-6">
                              <img className={stylesOrders.imgOrdersProduct} src={imagetwo} />
                          </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default UserOrder;