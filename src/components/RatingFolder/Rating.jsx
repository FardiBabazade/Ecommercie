import React from 'react'
import styles from "../../styles/UserInformationTable.module.css"
import stylesRating from "../../styles/Ratingpage.module.css"
import imageone from "../../assets/images/shop1.webp"
import imagetwo from "../../assets/images/shop2.webp"

function Rating() {
  return (
    <React.Fragment>
      <div className={styles.titleInformationContent}>
        <h3>Dəyərləndirmələrim</h3>
      </div>
      <div className={stylesRating.bodyRatingContent}>
        <div className="row">
          <div className="col-md-6">
            <div className={stylesRating.ratingProductStyle}>
              <div className="row">
                <div className="col-md-4">
                  <img src={imageone} />
                </div>
                <div className="col-md-8">
                  <h5>Jack & jhones kisi paltari saroska</h5>
                  <div className="row">
                    <div className="col-md-5">
                      <span className={stylesRating.spanOneRating}>4.4 </span>
                      <span className={stylesRating.spanTwoRating}>***</span>
                      <span className={stylesRating.spanThreeRating}>(1046) |</span>
                    </div>
                    <div className="col-md-7">
                      <span className={stylesRating.spanDateRating}>Təhvil tarixi 01.01.2023 </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className={stylesRating.ratingProductStyle}>
              <div className="row">
                <div className="col-md-4">
                  <img src={imageone} />
                </div>
                <div className="col-md-8">
                  <h5>Jack & jhones kisi paltari saroska</h5>
                  <div className="row">
                    <div className="col-md-5">
                      <span className={stylesRating.spanOneRating}>4.4 </span>
                      <span className={stylesRating.spanTwoRating}>***</span>
                      <span className={stylesRating.spanThreeRating}>(1046) |</span>
                    </div>
                    <div className="col-md-7">
                      <span className={stylesRating.spanDateRating}>Təhvil tarixi 01.01.2023 </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Rating;