import React from 'react'
import './Suggest.css'

export default function Suggest() {
  return (
    <div className="suggest">
        <div className="suggest-header">
            <h3>Suggest</h3>
            <a href="#123">See all</a>
        </div>
        <div className="suggest-content">
          <div className="suggest-content__list">
            <div className="suggest-content__item">
              <div className="suggest-content__item-info">
                <div className="suggest-item-info__avatar">
                  <img src={require('../../assets/img/profile-1.jpg')} alt="" />
                </div>
                <div className="suggest-item-info__name">
                  <p>Dana Scully</p>
                  <p>@_danascully</p>
                </div>
              </div>
              <div className="suggest-content__item-btn button">
                <p>Follow</p>
              </div>
            </div>
            <div className="suggest-content__item">
              <div className="suggest-content__item-info">
                <div className="suggest-item-info__avatar">
                  <img src={require('../../assets/img/profile-1.jpg')} alt="" />
                </div>
                <div className="suggest-item-info__name">
                  <p>Dana Scully</p>
                  <p>@_danascully</p>
                </div>
              </div>
              <div className="suggest-content__item-btn button">
                <p>Follow</p>
              </div>
            </div>
            <div className="suggest-content__item">
              <div className="suggest-content__item-info">
                <div className="suggest-item-info__avatar">
                  <img src={require('../../assets/img/profile-1.jpg')} alt="" />
                </div>
                <div className="suggest-item-info__name">
                  <p>Dana Scully</p>
                  <p>@_danascully</p>
                </div>
              </div>
              <div className="suggest-content__item-btn button">
                <p>Follow</p>
              </div>
            </div>
          </div>
        </div>
    </div> 
  )
}
