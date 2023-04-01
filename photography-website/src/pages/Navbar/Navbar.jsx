import React from "react";
import "./Navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to={"/"} style={{textDecoration : "none"}}>
          <span>PhotoGenic</span>
        </Link>
        <Link to={"/"} style={{textDecoration : "none"}}>
          <HomeOutlinedIcon />
        </Link>

        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search" name="" id="" />
        </div>
        <div className="upload">
          <label htmlFor="uploadBtn">Upload Your Image Here</label>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfurNSA-9cZ6RF4eetwWMOkIAWf3e7sGtX4Pc9ZPfsiV7ZQlg/viewform"
            target="_blank"
            id="uploadBtn"
          >
            <DriveFolderUploadIcon />
          </a>
        </div>
      </div>
      <div className="right">
        <Person2OutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
      </div>
    </div>
  );
};

export default Navbar;
