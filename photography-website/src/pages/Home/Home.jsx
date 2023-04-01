import React from "react";
import Navbar from "../Navbar/Navbar";
import RightContent from "../RightContent/RightContent";
import LeftContent from "../LeftContent/LeftContent";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div style={{display :"flex"}}>
        <LeftContent />
        {/* <RightContent /> */}
        <Outlet/>
      </div>
    </div>
  );
};

export default Home;
