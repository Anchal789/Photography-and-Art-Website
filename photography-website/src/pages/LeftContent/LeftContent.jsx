import React from 'react'
import "./LeftContent.scss"
import Abstract from "../../assets/Abstract.png"
import Animal from "../../assets/Animal.png"
import BlackAndWhite from "../../assets/Black and White.png"
import Landscape from "../../assets/Landscape.png"
import Potrait from "../../assets/Potrait.png"
import Selfie from "../../assets/Selfie.png"
import Travel from "../../assets/Travel.png"


const LeftContent = () => {
  return (
    <div className='leftbar'>
        <div className="container">
            <div className="menu">
                <div className="item">
                    <img src={Abstract} alt="" />
                    <span>Abstract</span>
                </div>
                <hr />
                <div className="item">
                    <img src={Animal} alt="" />
                    <span>Animal</span>
                </div>
                <hr />
                <div className="item">
                    <img src={BlackAndWhite} alt="" />
                    <span>Black & White</span>
                </div>
                <hr />
                <div className="item">
                    <img src={Landscape} alt="" />
                    <span>Landscape</span>
                </div>
                <hr />
                <div className="item">
                    <img src={Potrait} alt="" />
                    <span>Potrait</span>
                </div>
                <hr />
                <div className="item">
                    <img src={Selfie} alt="" />
                    <span>Selfie</span>
                </div>
                <hr />
                <div className="item">
                    <img src={Travel} alt="" />
                    <span>Travel</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LeftContent