import React, { useState } from "react";
import "./LeftContent.scss";
import Abstract from "../../assets/Abstract.png";
import Animal from "../../assets/Animal.png";
import BlackAndWhite from "../../assets/Black and White.png";
import Landscape from "../../assets/Landscape.png";
import Potrait from "../../assets/Potrait.png";
import Selfie from "../../assets/Selfie.png";
import Travel from "../../assets/Travel.png";
import { Link } from "react-router-dom";
import RightContent from "../RightContent/RightContent";

const LeftContent = () => {
  const [state, setState] = useState("");
  const changeComponent = (event) => {
    setState(event.target.id);
  };

  return (
    <>
      <div className="leftbar">
        <div className="container">
          <div className="menu">
            <div className="item">
              <Link to="/">
                <img
                  src={Abstract}
                  alt=""
                  id="abstract"
                  style={{ cursor: "pointer" }}
                  onClick={changeComponent}
                />
              </Link>
              <span>Abstract</span>
            </div>
            <hr />

            <div className="item">
              <Link to="/animal">
                <img src={Animal} alt="" />
              </Link>
              <span>Animal</span>
            </div>
            <hr />
            <div className="item">
              <Link to={"/grayscale"}>
                <img src={BlackAndWhite} alt="" />
              </Link>
              <span>Black & White</span>
            </div>
            <hr />
            <div className="item">
              <Link to={"/landscape"}>
                <img src={Landscape} alt="" />
              </Link>
              <span>Landscape</span>
            </div>
            <hr />
            <div className="item">
              <Link to={"/potrait"}>
                <img src={Potrait} alt="" />
              </Link>
              <span>Potrait</span>
            </div>
            <hr />
            <div className="item">
              <Link to={"/selfie"}>
                <img src={Selfie} alt="" />
              </Link>
              <span>Selfie</span>
            </div>
            <hr />
            <div className="item">
              <Link to={"/travel"}>
                <img src={Travel} alt="" />
              </Link>
              <span>Travel</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftContent;
